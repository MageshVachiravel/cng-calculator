(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector("#trip-distance"),s=document.querySelector("#fuel-efficiency"),i=document.querySelector("#fuel-cost");document.querySelector("#name");const f=document.querySelector("#calcuBtn");f.addEventListener("click",l=>{if(l.preventDefault(),u.value==="")alert("enter the value to calculate");else{let r=u.value,c=s.value,o=i.value;const t="Your fuel cost will be around :₹"+r/c*o;alert(t)}});
