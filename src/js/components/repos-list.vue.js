import Vue from 'vue/dist/vue.min'
import Github from 'github-api'

// check if we have already some repos in the localstorage
let localRepos = localStorage.getItem('coffeekraken-repos');
if (localRepos) {
	localRepos = JSON.parse(localRepos);
	// check time
	if (localRepos.timestamp < new Date().getTime() - 3600 * 24 * 1000) {
		// fetch new repos
		fetchRepos();
	} else {
		// display repos
		displayRepos(localRepos.repos);
	}
} else {
	fetchRepos();
}

function fetchRepos() {
	var github = new Github({
	  token: "421307ab0abcad55ff8168c65084cf4f5b610165",
	  auth: "oauth"
	});
	var user = github.getUser();
	user.listRepos({}, function(err, repos) {
		if ( ! repos) return;
		// filter repos
		const coffeeRepos = repos.filter((repo) => {
			return repo.owner.login === 'Coffeekraken'
		});
		// save into localstorage
		localStorage.setItem('coffeekraken-repos', JSON.stringify({
			timestamp : new Date().getTime(),
			repos : coffeeRepos
		}));
		// display repos
		displayRepos(coffeeRepos);
	}, function() {});
}

// display repos
function displayRepos(repos) {
	// new Vue component
	Vue.component('coffeekraken-repos', {
		template : `
			<ul class="nav nav--pills">
				<li class="nav__item" v-for="repo in repos">
					<a :href="repo.html_url" :title="repo.name" target="_blank">
						<span class="pill" :class="{ 'pill--secondary' : repo.name.substr(0,2) === 's-' }">
							{{repo.name}}
							<div class="tooltip tooltip--t tf t-center">
								{{repo.description}}
							</div>
						</span>
					</a>
				</li>
			</ul>
		`,
		data : function() {
			return {
				repos : repos
			};
		}
	});

	// new Vue
	new Vue({
		el : document.querySelector('[vue-coffeekraken-repos]')
	});
}
