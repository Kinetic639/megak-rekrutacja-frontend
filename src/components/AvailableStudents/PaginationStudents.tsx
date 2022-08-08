import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setStudentsListPerPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfStudents: number;
  studentsListPerPage: number;
  currentPage: number;
  search: string;
}

interface FormLoginType {
  selectedValue: number;
}

const PaginationStudents = (props: Props) => {
  const { watch, register } = useForm<FormLoginType>();
  const watchSelectedValue = watch('selectedValue', 10);
  useEffect(() => {
    props.setStudentsListPerPage(watchSelectedValue);
  }, [watchSelectedValue]);

  useEffect(() => {
    props.setCurrentPage(1);
  }, [props.search]);

  return (
    <Container className={`mt-4 custom-container-third`}>
      <Row className={`float-end`} id={`row-custom-padding-elements`}>
        <Col className={`ps-0 pe-2`}>
          <p className={`col-custom-p`}> Ilość elementów</p>
        </Col>
        <Col className={`ps-0 pe-3`}>
          <Form.Select
            id={`custom-select-pagination-page`}
            aria-label="Default select example"
            className={`col-custom-select`}
            defaultValue={10}
            {...register('selectedValue')}
          >
            <option className={`col-custom-select-element`} value={5}>
              5
            </option>
            <option className={`col-custom-select-element`} value={10}>
              10
            </option>
            <option className={`col-custom-select-element`} value={15}>
              15
            </option>
          </Form.Select>
        </Col>
        <Col className={`ps-0 ms-0`}>
          <p className={`col-custom-padding-count-element `}>
            {props.numberOfStudents === 0
              ? ''
              : props.currentPage * watchSelectedValue -
                (watchSelectedValue - 1) +
                '-'}
            {props.numberOfStudents <= props.currentPage * watchSelectedValue
              ? props.numberOfStudents
              : props.currentPage * watchSelectedValue}{' '}
            z {props.numberOfStudents}
          </p>
        </Col>
        <Col className={`ps-0 pe-2`}>
          <Button
            id={`back-custom-button`}
            className={`col-custom-button-next-back `}
            disabled={props.currentPage <= 1}
            onClick={() => props.setCurrentPage((prevState) => prevState - 1)}
          ></Button>
        </Col>
        <Col className={`ps-0 pe-0`}>
          <Button
            id={`next-custom-button`}
            className={`col-custom-button-next-back`}
            disabled={
              props.numberOfStudents <= props.currentPage * watchSelectedValue
            }
            onClick={() => props.setCurrentPage((prevState) => prevState + 1)}
          ></Button>
        </Col>
      </Row>
    </Container>
  );
};

export { PaginationStudents };
