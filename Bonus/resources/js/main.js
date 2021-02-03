
import Vue from 'vue';
import axios from 'axios';


let appCd = new Vue ({
		el:'#appCd',
		data: {
			listaDischi:[],
			genere:["pop","rock"],
			key:"All",
		},
		methods: {
			getCollection() {
			//const axios = require('axios');
				axios
					.get('./resources/server/api.php')
					.then(resp => {
						let dischi = resp.data.response;
						this.genere = [...new Set(dischi.map(item => item.genre))];
						if (this.key === "All" ) {
						this.listaDischi = dischi;
						}else{
							this.listaDischi = dischi.filter((disco) => disco.genre === this.key);
						}
					})
					.catch(error => {
            console.log(error);
        });
			}
		},
		mounted() {
			this.getCollection();
      },
	});