import styled from "styled-components";
import {useEffect, useState} from "react";
import TravelThunderCard from "./TravelThunderCard";
import axios from "axios";
import { TravelCardProps } from "../types/TravelCardProps";

export default function ThunderContent() {
  const [posts, setPosts] = useState<TravelCardProps[]>([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://travelgo.mooo.com/api/meeting");
          console.log(`${response.data}`);
          setPosts(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
      console.log(posts);
    }, []);

    if (!posts) {
      return <div>loading...</div>;
    }
    
    return (
        <ThunderContentWrapper>
          
          {/* {posts.map((plan, index) => ( */}
            {posts.map((plan, index) => (
                <TravelThunderCard key={index} {...plan} />
            ))}
        </ThunderContentWrapper>
    );
}

const ThunderContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 16px;
`;