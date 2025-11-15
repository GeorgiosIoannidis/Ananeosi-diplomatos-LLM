var languageContent = {
  greek: {
    languageBtn: "EL",
    mainTitle: "Ανανέωση Άδειας Οδήγησης",
    pageTitle: "Ανανέωση Άδειας Οδήγησης",
    infoTitle:
      "Πληροφορίες για ανανέωση άδειας οδήγησης (όλων τον κατηγοριών) 2025",
    subTitle1:
      "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε ανανέωση της άδειας οδήγησης σας.",
    subTitle2:
      "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
    subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
    backButton: "Πίσω",
    nextQuestion: "Επόμενη ερώτηση",
    biggerCursor: "Μεγαλύτερος Δρομέας",
    bigFontSize: "Μεγάλο Κείμενο",
    readAloud: "Ανάγνωση",
    changeContrast: "Αντίθεση",
    readingMask: "Μάσκα Ανάγνωσης",
    footerText:
      "Αυτό το έργο δημιουργήθηκε για τις ανάγκες της πτυχιακής μας εργασίας κατά τη διάρκεια των προπτυχιακών μας σπουδών στο Πανεπιστήμιο Μακεδονίας. Η ομάδα μας αποτελείται από 2 φοιτητές της Εφαρμοσμένης Πληροφορικής:",
    and: "και",
    student1: "Γεώργιος Ιωαννίδης",
    student2: "Χαράλαμπος Γεωργόπουλος",
    startBtn: "Ας ξεκινήσουμε",
    chooseAnswer: "Επιλέξτε την απάντησή σας",
    oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
    errorAn: "Λάθος:",
    choose: "Πρέπει να επιλέξετε μια απάντηση",
  },
  english: {
    languageBtn: "EN",
    mainTitle: "Driver’s License Renewal",
    pageTitle: "Driver’s License Renewal",
    infoTitle: "Information on driver’s license renewal (all categories) 2025",
    subTitle1:
      "This questionnaire can help you find out if you are eligible to renew your driver’s license.",
    subTitle2:
      "Completing the questionnaire should not take more than 10 minutes.",
    subTitle3: "We will neither store nor share your answers.",
    backButton: "Βack",
    nextQuestion: "Next Question",
    biggerCursor: "Bigger Cursor",
    bigFontSize: " Big Font Size",
    readAloud: "Read Aloud",
    changeContrast: " Change Contrast",
    readingMask: " Reading Mask",
    footerText:
      "This project was created for the needs of our thesis at the University of Macedonia. Our team consists of 2 students of Applied Informatics:",
    and: "and",
    student1: "Georgios Ioannidis",
    student2: "Charalampos Georgopoulos",
    startBtn: "Let's start",
    chooseAnswer: "Choose your answer",
    oneAnswer: "You can choose only one option.",
    errorAn: "Error:",
    choose: "You must choose one option",
  },
};

// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
  currentLanguage = currentLanguage === "greek" ? "english" : "greek";
  localStorage.setItem("preferredLanguage", currentLanguage);
  updateContent();
}

function updateContent() {
  var components = document.querySelectorAll(".language-component");

  components.forEach(function (component) {
    var componentName = component.dataset.component;
    component.textContent = languageContent[currentLanguage][componentName];
  });
}

// Initialize the content based on the selected language
updateContent();
