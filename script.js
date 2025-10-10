gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-inner", {
  opacity: 0,
  y: 100,                 
  duration: 2.5,            
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".hero-inner",
    start: "top 120%",     
    end: "top 40%",        
    scrub: true
  }
});


document.querySelectorAll(".app-row").forEach((row) => {
  const xStart = row.classList.contains("reverse") ? 180 : -180; 
  gsap.from(row, {
    opacity: 0,
    x: xStart,
    y: 80,                 
    duration: 2.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: row,
      start: "top 120%",    
      end: "top 30%",       
      scrub: true
    }
  });
});


gsap.from("#contact", {
  opacity: 0,
  y: 100,               
  duration: 2.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 120%",
    end: "top 40%",
    scrub: true
  }
});
