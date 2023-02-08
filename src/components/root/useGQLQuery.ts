import {useQuery} from 'react-query';
import {GraphQLClient,request} from 'graphql-request';


export const useGQLQuery = (key:string,query:any,variables:any,config={})=>{
   const endpoint = 'https://countries.trevorblades.com/';
   const fetchData = async()=> await request(endpoint,query,variables);
   return useQuery(key,fetchData,config);
}