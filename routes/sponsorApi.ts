import { Router, Application } from 'https://deno.land/x/oak@v6.1.0/mod.ts';
import SponsorService from '../service/sponsor.ts'

function sponsorApi(app: Application){
  const router:Router = new Router({
    prefix: '/api/sponsors'
  });

  app.use( router.routes());
  app.use( router.allowedMethods());

  const sponsorService = new SponsorService();

  router.get('/:sponsorId', async ({response, params}) => {
    const { sponsorId } = params;
    try {
      const result = await sponsorService.getSponsor(sponsorId);
      response.body = result;
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/', async ({ response }) => {
    try {
      const result = await sponsorService.getSponsors();
      response.body = result;
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/', async ({request, response}) => {
    try {
      const sponsor = await request.body().value;
      const result = await sponsorService.createSponsor(sponsor)
      response.body = result;
    } catch (error) {
      console.log(error);
    }
  })

  router.put('/:sponsorId', async({request, response, params})=>{
    const id = params.sponsorId;
    const body = await request.body().value;
    try {
      const result = await sponsorService.updateSponsor(id, body);
      response.body = result;
    } catch (error) {
      console.log(error);
    }
  })

  router.delete('/:sponsorId', async ({response, params}) => {
    const { sponsorId } = params;
    try {
      const result = await sponsorService.deleteSponsor(sponsorId);
      response.body = result;
    } catch (error) {
      console.log(error);
    }
  });
}

export { sponsorApi };
