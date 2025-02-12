import styled from "styled-components";
import { useEffect, useState } from "react";
import TravelPlanCard from "./TravelPlanCard";
import axios from "axios";
import { TravelPlanCardProps } from "../types/TravelPlanCardProps";


export default function PlanContent() {
  const [posts, setPosts] = useState<TravelPlanCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://travelgo.mooo.com/api/course");
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
        <PlanContentWrapper>
            {posts.map((plan, index) => (
                <TravelPlanCard key={index} {...plan} />
            ))}
        </PlanContentWrapper>
    );
}

const PlanContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 16px;
`;