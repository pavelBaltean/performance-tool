let expect  = require('chai').expect;
let request = require('request');

describe('Status and content', function() {
  describe ('Main page', function() {
      it('status/', function(done){
          request('http://localhost:3000', function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              done();
          });
      });
      it('status/?home=false', function(done){
        request('http://localhost:3000/?home=false', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
      });

      // it('content', function(done) {
      //     request('http://localhost:3000/run' , function(error, response, body) {
      //         response.getMaxListeners.should.include();
      //         done();
      //     });
      // });
  });

  describe ('Line Chart', function() {
    
      it('status/lineChart', function(done){
          request('http://localhost:3000/lineChart', function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              done();
          });
      });
      it('status/lineChart?lineChart=false', function(done){
        request('http://localhost:3000/lineChart?lineChart=false', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
      });
  });

  describe ('Pie Chart', function() {
    it('status/pieChart', function(done){
        request('http://localhost:3000/pieChart', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('status/pieChart?pieChart=false', function(done){
      request('http://localhost:3000/pieChart?pieChart=false', function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
    });
  });

});

  