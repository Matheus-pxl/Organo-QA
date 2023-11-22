describe('API alurapic', () => {
    // it('dados da api', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'http://localhost:3000/user/login',
    //         body: Cypress.env(),
    //         headers: { 'Accept-Language': 'en-us', },
    //     }).then((res) => {
    //         expect(res.status).to.be.equal(200)
    //         expect(res.body).is.not.empty
    //         expect(res.body).to.have.property('id')
    //         expect(res.body.id).to.be.equal(5)
    //     });

    // });
    it('fotos do usuario', () => {
        const tempoEsperado = Math.random() * 50
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/catarinap/photos',
            body: Cypress.env(),
            headers: { 'Accept-Language': 'en-us', },
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('591')
            expect(res.duration).to.be.lte(tempoEsperado)
        });

    });
});