FROM node:alpine

WORKDIR /app/

RUN mkdir /app/reports/

RUN npm install mocha@10.0.0 chai@4.3.6 chai-json-schema@1.5.1 mochawesome@7.1.3 supertest@6.2.4

RUN npm set-script test "mocha ./api --recursive --reporter mochawesome --reporter-options reportDir=reports/ --timeout 30000"