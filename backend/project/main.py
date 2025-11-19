"""
Main runner for the modular CV pipeline.
"""
import os
from tqdm import tqdm
from .config import RAW_DIR, FINAL_JSON
from .logging_utils import log_step
from .extraction import extract_text_pdf, extract_text_docx
from .cleaning import redact_pii, normalize_text, clean_whitespace
from .parsing import parse_cv_with_gemini, calculate_duration_months

os.makedirs(os.path.dirname(FINAL_JSON), exist_ok=True)
final_data = []
files = os.listdir(RAW_DIR)

for filename in tqdm(files, desc="Processing CVs", ncols=100):
    path = os.path.join(RAW_DIR, filename)
    text = ""
    if filename.endswith(".pdf"):
        text = extract_text_pdf(path)
    elif filename.endswith(".docx"):
        text = extract_text_docx(path)
    else:
        log_step(f"{filename}: unsupported format")
        continue
    log_step(f"{filename}: extraction done")
    if not text.strip() or text.startswith("ERROR"):
        log_step(f"{filename}: extraction failed")
        continue
    # Language detection can be added here if needed
    text = redact_pii(text)
    text = normalize_text(text)
    text = clean_whitespace(text)
    log_step(f"{filename}: cleaning done")
    structured = parse_cv_with_gemini(text)
    log_step(f"{filename}: parsing done")
    for exp in structured.get("experience", []):
        if exp.get("start") and exp.get("end"):
            exp["duration_months"] = calculate_duration_months(exp["start"], exp["end"])
    log_step(f"{filename}: duration calculation done")
    final_data.append({"name": filename, **structured})
    log_step(f"{filename}: added to final JSON")
with open(FINAL_JSON, "w", encoding="utf-8") as f:
    import json
    json.dump(final_data, f, indent=2, ensure_ascii=False)
log_step(f"Final JSON saved: {FINAL_JSON}")
log_step("Pipeline completed successfully!")
