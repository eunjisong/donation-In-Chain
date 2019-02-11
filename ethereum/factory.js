// web3.js 파일에서 프로바이더 삽입한 인스턴트는 있으나,
// 우리 컨트랙트를 삽입한 컨트랙트 인스턴트는 없다
// 여기서 팩토리 컨트랙트 인스턴트를 만들어,
// 프론트에서 사용하도록 할 것이다.

import web3 from './web3';
import DonationFactory from './build/DonationFactory.json';
const factory = new web3.eth.Contract(JSON.parse(DonationFactory.interface), '0x8094743DcAB9e738cF1E272e0756CaDBe31F787E');

export default factory
