var express = require('express'); 

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


  // test 1
  // GET /palindrome/ABA status code expected 200
  describe('GET /palindrome/ABA status code 200, its palindrome', () => {
      it('it should /GET status code 200', (done) => {
        chai.request('http://127.0.0.1:8081')
            .get('/palindrome/ABA')
            .end((err, res) => {
              // expect(res).to.have.status(200);
              // console.log(res.status);
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  // test 2
  // GET /palindrome/MACACO status code expected 400
  describe('GET /palindrome/MACACO status code 400, its NOT palindrome', () => {
      it('it should /GET status code 400', (done) => {
        chai.request('http://127.0.0.1:8081')
            .get('/palindrome/MACACO')
            .end((err, res) => {
              // expect(res).to.have.status(200);
              // console.log(res.status);
                res.should.have.status(400);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  // test 3
  // GET /palindrome/A MAN A PLAN A CANAL PANAMA status code expected 200
  describe('GET /palindrome/A MAN A PLAN A CANAL PANAMA status code 200, its palindrome', () => {
      it('it should /GET status code 200', (done) => {
        chai.request('http://127.0.0.1:8081')
            .get('/palindrome/A MAN A PLAN A CANAL PANAMA')
            .end((err, res) => {
              // expect(res).to.have.status(200);
              // console.log(res.status);
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
              done();
            });
      });
  });