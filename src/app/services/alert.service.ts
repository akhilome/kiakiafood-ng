import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';

interface IToastOptions {
  text?: string;
  duration: number;
  close?: boolean;
  gravity: string;
  positionLeft: boolean;
  backgroundColor: string;
  className?: string;
  stopOnFocus: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private defaultToastOptions: IToastOptions = {
    duration: 2000,
    gravity: 'bottom',
    positionLeft: false,
    backgroundColor: '#333333',
    stopOnFocus: false
  };

  constructor() {}

  info(message: string) {
    Toastify({
      ...this.defaultToastOptions,
      text: message
    }).showToast();
  }

  success(message: string) {
    Toastify({
      ...this.defaultToastOptions,
      backgroundColor: '#1d6b4f',
      text: message
    }).showToast();
  }

  error(message: string) {
    Toastify({
      ...this.defaultToastOptions,
      text: message,
      backgroundColor: '#b82e33'
    }).showToast();
  }
}
