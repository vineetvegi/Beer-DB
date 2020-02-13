import { VolumePipe } from './volume.pipe';

describe('VolumePipe', () => {

    it('displays the transformed value', () => {
        expect(new VolumePipe().transform(25)).toEqual('6.5 glns');
    });


});
