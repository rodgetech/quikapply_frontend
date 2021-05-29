import { Popconfirm, Button } from "antd";
import styled from "styled-components";
import {
  CheckCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCurrentStep,
  selectSections,
  setCurrentStep,
  setActiveSection,
  setSubmissionAttributes,
} from "../applySlice";
import { showModal } from "../../modal/modalSlice";
import { MODAL_TYPES } from "../../../shared/constants";

export const Container = styled.footer`
  padding: 30px;
  text-align: right;
`;

export default function MainActions() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const currentStep = useAppSelector(selectCurrentStep);
  const sections = useAppSelector(selectSections);

  const isFinalStep = sections.length - 1 === currentStep;
  const showPrevious = currentStep > 0;

  const changeStep = (newStep: number) => {
    dispatch(setCurrentStep(newStep));
    dispatch(setActiveSection(sections[newStep]));
  };

  const submitApplication = async () => {
    // Build out the submission object to POST
    dispatch(setSubmissionAttributes());

    // POST submission in email request modal
    dispatch(showModal({ modalType: MODAL_TYPES.APPLICANT_EMAIL_REQUEST }));
  };

  return (
    <Container>
      <Popconfirm
        title="Are you sure？"
        okText="Yes"
        cancelText="No"
        onConfirm={() => history.push("/")}
      >
        <Button style={{ marginRight: 15 }}>Cancel</Button>
      </Popconfirm>
      {showPrevious && (
        <Button
          style={{ marginRight: 15 }}
          icon={<ArrowLeftOutlined />}
          onClick={() => changeStep(currentStep - 1)}
        >
          Previous
        </Button>
      )}

      {!isFinalStep && (
        <Button
          type="primary"
          style={{ width: 220 }}
          onClick={() => changeStep(currentStep + 1)}
          icon={<ArrowRightOutlined />}
        >
          Next Section
        </Button>
      )}
      {isFinalStep && (
        <Popconfirm
          title="Are you sure？"
          okText="Yes"
          cancelText="No"
          onConfirm={submitApplication}
        >
          <Button
            type="primary"
            style={{ width: 220 }}
            icon={<CheckCircleOutlined />}
          >
            Confirm & Submit
          </Button>
        </Popconfirm>
      )}
    </Container>
  );
}