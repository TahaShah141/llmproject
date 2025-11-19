"""
File extraction utilities (PDF, DOCX, OCR).
"""
import fitz
from docx import Document
from PIL import Image
import pytesseract

# On macOS, tesseract is usually installed via brew and available on PATH
# If needed, set pytesseract.pytesseract.tesseract_cmd = '/usr/local/bin/tesseract'

def extract_text_pdf(path):
    doc = fitz.open(path)
    full_text = ""
    for page in doc:
        t = page.get_text()
        # Ensure t is a string
        if isinstance(t, list):
            t = "\n".join(str(item) for item in t)
        if isinstance(t, str) and t.strip():
            full_text += t
        else:
            pix = page.get_pixmap(dpi=300)
            img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
            full_text += pytesseract.image_to_string(img, lang="eng")
    return full_text

def extract_text_docx(path):
    doc = Document(path)
    return "\n".join([p.text for p in doc.paragraphs])
