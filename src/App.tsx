import React, { useState } from "react";
import styled from "@emotion/styled";
import "./App.css";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  input {
    width: 5rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
    height: 2rem;
    font-size: 2rem;
  }

  form:nth-of-type(1) input {
    margin-right: 1rem;
  }

  form:nth-of-type(2) input {
    margin-right: 1rem;
  }

  form:nth-of-type(3) input {
    margin-right: 1rem;
    margin-bottom: 5rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 2rem 0 3rem;
  color: #6741d9;
  text-align: center;
`;

const Result = styled.div`
  /* margin-right: 7.5rem; */
  color: #6741d9;
  text-align: center;
  font-size: 2rem;
`;

interface ForMolOption {
  percent: number;
  density: number;
  mw: number;
}

const calcMol = (option: ForMolOption) =>
  (option.percent * 10 * option.density) / (1 * option.mw);

const App = () => {
  const [config, setConfig] = useState<ForMolOption>({
    percent: 0,
    density: 0,
    mw: 0,
  });

  return (
    <MainContainer>
      <Title>퍼센트농도 -{">"} 몰농도 환산기</Title>
      <SubContainer>
        <form>
          <label>
            퍼센트농도:
            <input
              type="number"
              value={config.percent}
              onChange={(e) =>
                setConfig({ ...config, percent: +e.target.value })
              }
            />
            %
          </label>
        </form>
        <form>
          <label>
            밀도:
            <input
              type="number"
              value={config.density}
              onChange={(e) =>
                setConfig({ ...config, density: +e.target.value })
              }
            />
            g/cm³
          </label>
        </form>
        <form>
          <label>
            원자량, 분자량, 화학식량:
            <input
              type="number"
              value={config.mw}
              onChange={(e) => setConfig({ ...config, mw: +e.target.value })}
            />
          </label>
        </form>
      </SubContainer>
      <Result className="result">
        결과!
        <br />
        {calcMol(config)}
      </Result>
    </MainContainer>
  );
};

export default App;
