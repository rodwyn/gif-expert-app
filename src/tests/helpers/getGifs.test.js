import {getGifs} from '../../helpers/getGifs';

describe('Testing getGifs helper.', ()=>{
  test('Should get 10 elements.', async()=>{
    const gifs = await getGifs('daft punk');
    expect(gifs.length).toBe(10);
  });

  test('Should get 0 elements.', async()=>{
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});