
import Vue from 'vue';
import axios from 'axios';


let appCd = new Vue ({
		el:'#appCd',
		data: {
			listaDischi:"",
		},
		mounted() {
      //const axios = require('axios');
			axios
				.get('public/server/api.php')
				.then(resp => {
					let disco = resp.data;
          this.listaDischi = disco;
				});
      },
	});