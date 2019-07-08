window.onload = function() {

    var content = {
        firstName: 'Simone',
        lastName: 'Kaufmann',
        street: 'Landstraße 22b',
        city: '30890 Barsinghausen',
        phone: '0251 / 1204193152',
        mail: 'info@himmelskörper-wellness.de',
        birthday: '09.07.1983',
        birth_location: 'Langenhagen',
        ust_id: 'DE1234567890',
        wirtschaftId: '',
        twitter: 'https://www.twitter.com',
        facebook: 'https://facebook.com',
        linkedIn: 'https://www.linkedin.com',
        aufsichtBehoerde: 'Hannover'
    };


    mainApp = new Vue({
        el: '#main',
        data: content
    });

    footerApp = new Vue({
        el: '#footer',
        data: content
    });



}
