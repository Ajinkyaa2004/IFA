
try:
    import pypdf
    import os

    pdf_path = "IFA_Case_Studies_Portfolio.pdf"
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        exit(1)

    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except ImportError:
    try:
        import PyPDF2
        import os

        pdf_path = "IFA_Case_Studies_Portfolio.pdf"
        if not os.path.exists(pdf_path):
            print(f"File not found: {pdf_path}")
            exit(1)

        reader = PyPDF2.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print(text)
    except ImportError:
        print("Neither pypdf nor PyPDF2 found.")
