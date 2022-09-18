import { } from 'react-native';
import React from 'react';

export const routes = {
    onBoard: 'onBoard',
    dashBoard: 'dashBoard',
    transaction: 'transaction',
    searchPeople: 'searchPeople' 
};

export const itemList = [
    {
        id: 1,
        title: 'Now Transaction in your Palms',
        description: 'You have nothing to be scared about, we got you covered'
    },
    {
        id: 2,
        title: 'Transfer that is safe',
        description: 'Now Transaction in your Palm'
    },
    {
        id: 3,
        title: 'Transfer that is safe',
        description: 'Now Transaction in your Palm'
    },
];

export const Images = {
    onBoard: require('./assests/onBoardImage.png')
};

export const transactionTypes = {
    pending: 'Pending',
    received: 'Received',
    sent: 'Sent',
    failed: 'Failed'
};

export  interface transtype {
    id: number,
    txtColor: string,
    bg:string,
    status: string,
    name: string,
    amount: string,
    image: string
};

export const transactions = [
    {
        id: 1,
        txtColor: '#FFA500',
        bg:'#192259',
        status: transactionTypes.pending,
        name: 'AdeBoye Usman',
        amount: '₦ 20,000',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        id: 2,
        txtColor: '#FE4A54',
        bg:'#10194E',
        status: transactionTypes.failed,
        name: 'Mercy Papoola',
        amount: '₦ 10,000',
        image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 3,
        txtColor: '#FAAD39',
        bg:'#192259',
        status: transactionTypes.sent,
        name: 'Onam Adetayo',
        amount: '₦ 5,000',
        image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        id: 4,
        bg: '#10194E',
        txtColor: '#1DC7AC',
        status: transactionTypes.received,
        name: 'Kingsley Abiodun',
        amount: '₦ 50,000',
        image: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
    },
    {
        id: 5,
        txtColor: '#FFA500',
        bg:'#192259',
        status: transactionTypes.pending,
        name: 'Adeleke Ramon',
        amount: '₦ 8,000',
        image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80'
    },
    {
        id: 6,
        bg: '#10194E',
        txtColor: '#FAAD39',
        status: transactionTypes.sent,
        name: 'Ramon Kingsley',
        amount: '₦ 20,000',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
];
