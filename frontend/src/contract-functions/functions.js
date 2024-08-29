import { ethers } from 'ethers';

import ABI from '../../contract-datas/contract-abi.json';
import ADDRESS from '../../contract-datas/contract-address.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contract = new ethers.Contract(ADDRESS.address, ABI.abi, signer);

export async function sayHello () {
    return await contract.sayHello();
}