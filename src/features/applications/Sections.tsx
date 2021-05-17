import { Button, Tooltip, Typography } from "antd";
import styled from "styled-components";
import { blue } from "@ant-design/colors";
import { CloseSquareOutlined, PlusOutlined } from "@ant-design/icons";

import Rows from "./Rows";
import { useAppDispatch } from "../../app/hooks";
import { removeSection, setActiveSection } from "./applicationsSlice";
import { ISection } from "./applications.interface";
import { useHistory } from "react-router";
import { showDrawer } from "../drawer/drawerSlice";
import { DRAWER_TYPES } from "../../shared/constants";

const { Title } = Typography;

const RemoveIconContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -22px;
  width: 50px;
  text-align: center;
  background: ${blue.primary};
  cursor: pointer;
  display: none;
`;

const SectionContainer = styled.div`
  background: #fff;
  position: relative;
  padding: 30px 20px;
  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    border-bottom: 0;
    border: 1px dashed ${blue.primary};
  }
`;

const ParentContainer = styled.div`
  position: relative;
  &:hover ${RemoveIconContainer} {
    display: inherit;
  }
  &:hover ${SectionContainer} {
    border: 1px solid ${blue.primary};
  }
`;

interface ISections {
  sections: ISection[];
  disabled: boolean;
}

const Sections = ({ sections, disabled }: ISections) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const navigateToSection = (section: ISection) => {
    dispatch(setActiveSection(section));
    history.push(
      `/applications/${section.applicationId}/sections/${section.id}`
    );
  };

  return (
    <>
      {sections.map((section) => (
        <ParentContainer key={section.id}>
          <RemoveIconContainer onClick={() => dispatch(removeSection(section))}>
            <Tooltip title="Remove section">
              <CloseSquareOutlined style={{ color: "#fff" }} />
            </Tooltip>
          </RemoveIconContainer>
          <SectionContainer
            key={section.id}
            onClick={() => navigateToSection(section)}
            style={{ marginBottom: 20 }}
          >
            <Title level={4}>{section.title}</Title>
            <div style={{ textAlign: "center" }}>
              <Rows sectionId={section.id} disabled={disabled} />
            </div>
          </SectionContainer>
        </ParentContainer>
      ))}
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Button
          onClick={() =>
            dispatch(
              showDrawer({
                drawerType: DRAWER_TYPES.SECTION_LAYOUT_PICKER_DRAWER,
              })
            )
          }
          icon={<PlusOutlined />}
        >
          Add Section
        </Button>
      </div>
    </>
  );
};

export default Sections;
