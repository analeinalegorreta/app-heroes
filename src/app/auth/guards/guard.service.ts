
import {  inject } from '@angular/core';
import {  CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const denyGuestGuard: CanActivateFn = (route, state) =>{
  console.log(route)
  console.log(state)
  //return inject(AuthService).checkAuthentication
  return true

};



