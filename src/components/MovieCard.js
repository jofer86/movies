const MovieCard = {
    movieMarkup: `
    <div class="col-md-4">
        <h4 class="text-center"><strong>STYLE 2</strong></h4>
        <hr>
            <div class="profile-card-6"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-6.jpg" class="img img-responsive">
                <div class="profile-name">JOHN
                    <br>DOE</div>
                <div class="profile-position">Lorem Ipsum Donor</div>
                <div class="profile-overview">
                    <div class="profile-overview">
                        <div class="row text-center">
                            <div class="col-xs-4">
                                <h3>1</h3>
                                <p>Rank</p>
                            </div>
                            <div class="col-xs-4">
                                <h3>50</h3>
                                <p>Matches</p>
                            </div>
                            <div class="col-xs-4">
                                <h3>35</h3>
                                <p>Goals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>`,
    movieLogic: async function() {
        let forms = document.getElementsByClassName('form-groups')
        forms.attributes('disabled', true)
    }
}

export default MovieCard