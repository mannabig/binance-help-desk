import React, { useEffect } from "react";

function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;
    const Script = document.createElement("script");
    Script.id = "google-translate-script";
    Script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    Script.async = true;
    document.body.appendChild(Script);

    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es,pt,pk,in,de,pl,it,sl,sk,ar,sr,tr,ro,et,da,ru,sv,el",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;