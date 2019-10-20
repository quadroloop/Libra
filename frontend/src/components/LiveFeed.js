import axios from 'axios';
import { el, isMounted } from '../components/vanilla';

let prod = true;


export const loadLiveFeed = () => {
  if (isMounted('live-feed') && prod === true) {
    axios.get('https://api.reliefweb.int/v1/disasters?limit=100&profile=list&preset=latest')
      .then(res => {

        console.log(res.data.data)

        el('live-feed').innerHTML = "";
        let nfeed = res.data.data;

        nfeed.forEach(item => {
          el('live-feed').innerHTML += `
          <a href="${item.fields.url}" target="_bank" rel="noreferrer noopener">
            <div class="new-feed-card animated fadeIn">
              <span><strong>${item.fields.name}</strong></span>
              <br />
              <small>${item.fields.country.length} area/s affected</small><br />
              <div class="btn-circle">
                <i class="fa fa-chevron-right"></i>
              </div>
              <div class="mt-3">
                <small class="badge-warning p-1 px-2"><i class="fa fa-warning"></i> ${item.fields.type[0].name}</small>
              </div>
            </div>
            </a>
            `
        })

      })
  }
}

