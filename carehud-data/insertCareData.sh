mongoimport -d carehud -c client --type csv --file Client.csv --headerline
mongoimport -d carehud -c disabilities --type csv --file Disabilities.csv --headerline
mongoimport -d carehud -c employmentEducation --type csv --file EmploymentEducation.csv --headerline
mongoimport -d carehud -c enrollment --type csv --file Enrollment.csv --headerline
mongoimport -d carehud -c exit --type csv --file Exit.csv --headerline
mongoimport -d carehud -c funder --type csv --file Funder.csv --headerline
mongoimport -d carehud -c healthAndDV --type csv --file HealthAndDV.csv --headerline
mongoimport -d carehud -c incomeBenefits --type csv --file IncomeBenefits.csv --headerline
mongoimport -d carehud -c services --type csv --file Services.csv --headerline
mongoimport -d carehud -c coc --type csv --file Coc.csv --headerline
