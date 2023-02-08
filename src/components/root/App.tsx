import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/contexts/UserContext";
import gql from 'graphql-tag';
import Main from "~/components/root/Main";

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
  return (
    // <HelmetProvider>
    //   <AuthProvider>
    //     <Main />
    //   </AuthProvider>
    // </HelmetProvider>
    <div>Graphql with react-query</div>
  )
};
