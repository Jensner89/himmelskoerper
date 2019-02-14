window.onload = function() {

    var content = {
        firstName: 'Nicole',
        lastName: 'Meyer',
        street: 'Hindenburgallee 265d',
        city: '29633 Münster',
        phone: '0251 / 1204193152',
        mail: 'info@himmelskörper-wellness.de',
        birthday: '17.03.1982',
        birth_location: 'Stuttgart',
        ust_id: 'DE1234567890',
        wirtschaftId: '',
        twitter: 'https://www.twitter.com',
        facebook: 'https://facebook.com',
        linkedIn: 'https://www.linkedin.com',
        aufsichtBehoerde: 'Stuttgart'
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