import web3 from './web3';
import Donation from './build/Donation.json';

const donation = new web3.eth.Contract(JSON.parse(Donation.interface), '0x8094743DcAB9e738cF1E272e0756CaDBe31F787E');

export default donation
