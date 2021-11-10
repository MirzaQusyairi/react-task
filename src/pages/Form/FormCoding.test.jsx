import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import FormCoding from './FormCoding';

describe('FormPage', () => {
  test('renders Form component', () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  test('input text for name and email with false value', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Mirza69' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'Esmeralda' },
    });

    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Mirza69');
    expect(screen.getByLabelText(/Email/)).toHaveValue('Esmeralda');
  });

  test('input text for ideal value', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Mirza' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'mirza@gmail.com' },
    });

    expect(screen.getByLabelText(/Nama/)).toHaveValue('Mirza');
    expect(screen.getByLabelText(/Email/)).toHaveValue('mirza@gmail.com');
  });

  test('submit button with error', () => {
    render(<FormCoding />);

    jest.spyOn(window, 'alert').mockImplementation(() => { });

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Mirza' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'emailgmail.com' },
    });

    fireEvent.submit(screen.getByText("Submit"))

    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Mirza');
    expect(screen.getByLabelText(/Email/)).toHaveValue('emailgmail.com');
  });

  test('submit button with ideal value', () => {
    render(<FormCoding />);

    jest.spyOn(window, 'alert').mockImplementation(() => { });

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Mirza' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'mirza@gmail.com' },
    });

    fireEvent.input(screen.getByTestId("nohp", { name: /noHandphone/i }), {
      target: { value: 123456789 },
    });

    expect(screen.getByLabelText(/Nama/)).toHaveValue('Mirza');
    expect(screen.getByLabelText(/Email/)).toHaveValue('mirza@gmail.com');
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789);

    fireEvent.submit(screen.getByText("Submit"))
    expect(window.alert).toBeCalledWith(`Data Pendaftar "Mirza" Berhasil Diterima`);
  });
});