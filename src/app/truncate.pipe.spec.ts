import { TruncatePipe } from './truncate.pipe';


describe('TruncatePipe', () => {

  it('adds dots after 20 words', () => {
      // tslint:disable-next-line:max-line-length
      const twentyOne = 'An Imperial Pilsner in collaboration with beer writers. Tradition Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.';
      const pipe = new TruncatePipe();

      const foo = pipe.transform(twentyOne, []);

      // tslint:disable-next-line:max-line-length
      expect(foo).toEqual('An Imperial Pilsner in collaboration with beer writers. Tradition Homage. Revolution. We wanted to showcase the awesome backbone of the...');

    //   expect(pipe).toEqual('hi');
  });

  it('does not add dots less than 20 words', () => {
      const eighteen = 'Hello World Vineet';
      const pipe = new TruncatePipe();

      const foo = pipe.transform(eighteen, []);
      expect(foo).toEqual(eighteen);
      expect(pipe).toBeTruthy();
  });
});
