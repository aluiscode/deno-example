import { Router, Application } from 'https://deno.land/x/oak@v6.1.0/mod.ts';
import SponsorService from '../service/sponsor.ts'

function sponsorApi(app: Application){
  const router:Router = new Router({
    prefix: '/api/sponsors'
  });

  app.use( router.routes());
  app.use( router.allowedMethods());

  const sponsorService = new SponsorService();

  // router.get('/:sponsorId', async ({response, params}) => {
  //   const { sponsorId } = params;
  //   try {
  //     const result = await sponsorService.get(sponsorId);
  //     response.body = result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  router.get('/', async ({ response }) => {
    try {
      const result = await sponsorService.getSponsors();
      response.body = result;
    } catch (error) {
      console.log(error);
    }
  });

  // router.post('/', async ({request, response}) => {
  //   if (!request.hasBody) {
  //     console.log('No tiene body')
  //   }
  //   const body = request.body();
  //   response.body = await body.value;
  // })

  // router.put('/:sponsorId', async({request, response, params})=>{
  //   // if (!request.hasBody) {
  //   //   console.log('No tiene body')
  //   // }
  //   const body = await request.body();
  //   const id = params.sponsorId;
  //   const data = await body.value;
  //   const res= {
  //     id,
  //     data
  //   }
  //   response.body =res;
  //   response.type = "json"
  // })

  // router.delete('/:sponsorId', ({response, params}) => {
  //   response.body = `Element to delete is ${params.sponsorId}`;
  // })
}

export { sponsorApi };
