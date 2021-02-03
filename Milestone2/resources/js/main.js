
import Vue from 'vue';
import axios from 'axios';


let appCd = new Vue ({
		el:'#appCd',
		data: {
			listaDischi:"",
		},
		methods: {

		},
		mounted() {
      //const axios = require('axios');
			axios
				.get('./resources/server/api.php')
				.then(resp => {
					let disco = resp.data.response;
          this.listaDischi = disco;
				});
      },
	});