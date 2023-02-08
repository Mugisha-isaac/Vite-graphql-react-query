import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/contexts/UserContext";
import gql from 'graphql-tag';
import Main from "~/components/root/Main";
import {useGQLQuery} from './useGQLQuery';
import { Key, ReactElement, JSXElementConstructor, ReactFragment } from "react";

const GET_COUNTRIES = gql`
     query{
      countries{
        code
        name
      }
     }
`;

const GET_COUNTRY = gql`
  
query($code: ID!){
  country(code: $code){
    name
  }
}
`;

export const App = () => {

// Fetch data from custom hook that uses React-QUery
// const {data,isLoading,error} = useGQLQuery('countries',GET_COUNTRIES,{
//   code:'SE'
// })

const {data,isLoading,error} = useGQLQuery('countries', GET_COUNTRY,{
  code:'SE'
});

console.log(data);

 if(isLoading) return <div>is loading....</div>
 if(error) return <div>Something went wrong!</div>

  return (

    <div>
      {/* {data.countries.map((country: { name: boolean | Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; })=>(
        <div key={country.name}>
            {country.name}
        </div>
      ))} */}
      {data.country.name}
    </div>


    // <HelmetProvider>
    //   <AuthProvider>
    //     <Main />
    //   </AuthProvider>
    // </HelmetProvider>
    
  )
};
