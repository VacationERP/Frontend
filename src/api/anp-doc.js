/* 연차촉진문서 api */
import api from './api'

// 연차촉진문서 조회
export const getListAnpDoc = (page, amount, keyword) => {
  return api({
    // url:'/anuual-promote'
    url:`/annual-promote?pageNum=${page}&amount=${amount}&keyword=${keyword}`,
    method:'get'
    // params:{
    //   pageNum: pno,
    //   amount: a,
    // },
  })
}

// 연차촉진문서 상세조회
export const getAnpDocDetail = (id) => {
  return api({
    url:`/annual-promote/${id}`,
    method:'get',
  })
}

// 연차촉진문서 추가
export const insertAnpDoc = (data) => {
  return api({
    url:'/annual-promote',
    method:'post',
    data:data
  })
}