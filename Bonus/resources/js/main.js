
import Vue from 'vue';
import axios from 'axios';


let appCd = new Vue ({
		el:'#appCd',
		data: {
			listaDischi:[],
			genere:[],
			key:"All",
			search:"",
		},
		methods: {
			getCollection() {
			//const axios = require('axios');
				axios
					.get('./resources/server/api.php')
					.then(resp => {
						let dischi = resp.data.response;
						this.genere = [...new Set(dischi.map(item => item.genre))];
						if (this.key === "All" ) {this.listaDischi = dischi;}
						else{this.listaDischi = dischi.filter((disco) => disco.genre === this.key);}
					})
					.catch(error => {
            console.log(error);
        });
			}
		},
		computed: {
			filtred: function (){
				return this.listaDischi.filter((autore) =>{
					return autore.author.match(this.search);
				});
			}
		},
		mounted() {
			this.getCollection();
      },
	});