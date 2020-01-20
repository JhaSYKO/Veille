$(document).ready(function createVeilleCard() {

    localStorage.setItem('veille', 'connected');

    base('Veille').select({
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
            $("#VeilleRetrieve").append(
                "<div class='row text-center'>" +
                    "<div class='card shadow m-2 text-center " + record.id + " list-item'>" +
                        "<div class='card-body'>" +
                            '<div class="headArticle row mt-5 text-center">'+
                                '<div class="col">'+
                                    '<h2>'+ record.get("SUBJECT") +'</h2>'+
                                    '<p class="mt-3 border bg-light">'+ record.get("Date") +'</p>'+
                                '</div>'+
                            '</div>'+
                            "<div class='btn btn-success mb-3 mt-3' id='" + record.id + "'>Afficher l'article</div>" +
                            "<div class='contentVeille container'>"+
                                '<div class="row">'+
                                    '<div class="container">'+
                                        '<div class="row mt-5 text-center">'+
                                            '<div class="col">'+
                                                '<h2>'+ record.get("SUBJECT") +'</h2>'+
                                                '<p class="mt-3 border bg-light">'+ record.get("Date") +'</p>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="row text-center">'+
                                            "<img class='col mt-5' src=" + record.get("Image copy") + ">"+
                                        '</div>'+
                                        '<div class="row mt-5 text-center">'+
                                            '<div class="col-xs-12 col-sm-12 col-md-6 mt-5">'+
                                                '<h5><u>Petite synthèse :</u></h5>'+
                                                '<p class="border bg-light mt-3">'+ record.get("Synthesis") +'</p>'+
                                            '</div>'+
                                            '<div class="col-xs-12 col-sm-12 col-md-6 mt-5">'+
                                                '<h5><u>Commentaire :</u></h5>'+
                                                '<p class="border bg-light mt-3">'+ record.get("Comment") +'</p>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="row mt-5">'+
                                            '<div class="col">'+
                                            '<p><u>Lien vers la source :<a href="'+record.get("link")+'">  Clique-moi  </a></u></p>'+
                                            '</div>'+
                                        '</div>'+
                                        "<div class='btn btn-success mt-5 returnVeille' onclick='createVeilleCard()'>Revenir</div>" +
                                    '</div>'+
                                '</div>'+
                            "</div>"+
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<script>" +
                    "$('#" + record.id + "').click(function() {" +
                        "$('.card').hide();" +
                        "$('.headArticle').hide();" +
                        "$('." + record.id + ", .contentVeille').show();" +
                        "base2('Veille').find('" + record.id + "', function(err, record) {"+
                           " if (err) { console.error(err); return; }"+
                            "console.log('Retrieved', record.id);"+
                       " });"+
                    "});" +
                    "$('.returnVeille').click(function() {" +
                        "$('.card').show();" +
                        "$('.headArticle').show();" +
                        "$('." + record.id + ", .contentVeille').hide();" +
                    "});" +
                "</script>"
            );
        });

        fetchNextPage();
    }, );
});