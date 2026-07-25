# Cloud Portfolio & Lebenslauf (AWS Serverless)

Eine professionelle, moderne Portfolio-Webseite mit integriertem Lebenslauf, die vollständig auf einer **AWS Serverless Architektur** basiert.

## 🚀 Architektur & Tech Stack

* **Frontend:** Statisches Hosting via **AWS S3**
* **Backend:** REST-API implementiert mit **Node.js** auf **AWS Lambda** und **API Gateway**
* **Datenbank:** **Amazon RDS (MySQL)** zur dynamischen Speicherung und Abfrage der Lebenslauf-Daten

## 📂 Projektstruktur
- `index.html` – Modernes Zwei-Spalten-Layout (angelehnt an professionelle CVs)
- `style.css` – Responsives Design mit CSS Flexbox
- `app.js` – Asynchroner Datenabruf (Fetch API) der AWS-Backend-Schnittstelle
- `rds-lambda/` – Quellcode und Konfiguration für die Lambda-Funktion und Datenbankanbindung
