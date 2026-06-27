// =============================================================
//  FIREBASE-KONFIGURATION  (die EINZIGE Firebase-Datei)
// -------------------------------------------------------------
//  So füllst du das aus:
//  1. https://console.firebase.google.com  ->  Projekt anlegen
//  2. Authentication -> Sign-in-method -> "E-Mail/Passwort" aktivieren
//  3. Firestore Database -> Datenbank erstellen (Produktionsmodus)
//  4. Storage aktivieren (für die optionalen Nachweisfotos)
//  5. Projekteinstellungen -> "Meine Apps" -> Web-App (</>) hinzufügen
//     -> die angezeigten Werte unten bei DEIN_... eintragen.
//  6. Authentication -> Settings -> "Autorisierte Domains":
//     deine GitHub-Pages-Domain hinzufügen, z.B. deinname.github.io
//
//  Hinweis: Diese Werte sind im Browser sichtbar - das ist normal.
//  Der Schutz kommt aus den Firestore-Regeln (firestore.rules).
// =============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// ---- HIER deine Keys eintragen ----
export const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN_PROJEKT.firebaseapp.com",
  projectId: "DEIN_PROJEKT_ID",
  storageBucket: "DEIN_PROJEKT.appspot.com",
  messagingSenderId: "DEIN_SENDER_ID",
  appId: "DEINE_APP_ID",
};

// ---- Admin-Account ----
// Wer sich mit dieser E-Mail anmeldet, wird automatisch als Disponent
// (Admin) eingerichtet und darf alles. Beim allerersten Login wird der
// Account bei Bedarf automatisch erstellt.
export const ADMIN_EMAIL = "info.gb.reinigung2@gmail.com";

// Firebase initialisieren und Dienste exportieren
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
