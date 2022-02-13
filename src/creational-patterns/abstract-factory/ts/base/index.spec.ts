import PlasticProductFactory from './factory/PlasticProductFactory';
import WoodProductFactory from './factory/WoodProductFactory';
import { clientCode } from './index';


it('Plastic world', () => {
  const result = clientCode(new PlasticProductFactory());

  expect(result).toStrictEqual({
    door: 'I am a plastic door.',
    window: 'I am a plastic window.',
    collaboration: 'Collaborate plastic: PlasticWindow + PlasticDoor.',
  });
})

it('Wood world', () => {
  const result = clientCode(new WoodProductFactory());

  expect(result).toStrictEqual({
    door: 'I am a wood door.',
    window: 'I am a wood window.',
    collaboration: 'Collaborate wood: WoodWindow + WoodDoor.',
  });
})
