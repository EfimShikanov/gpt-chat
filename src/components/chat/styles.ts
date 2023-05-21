import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-height: calc(100% - 58px);
  overflow-y: auto;
  transition: all 0.3s linear;
`;

export const Message = styled.div<{ role: "user" | "assistant" }>`
  display: flex;
  max-width: 65%;
  padding: 8px;
  border-radius: 10px;
  font-size: 18px;
  color: #f8f0fb;
  background: ${({ role }) => (role === "assistant" ? "#6320EE" : "#8075FF")};
  ${({ role }) => role === "user" && "margin-left: auto"};
`;
