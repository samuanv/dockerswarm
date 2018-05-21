package edu.uv.twcam.counters.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.uv.twcam.counters.security.JWTChecker;
import edu.uv.twcam.counters.service.CountersService;

@RestController
public class CountersController{
   private static final Logger logger = LoggerFactory.getLogger(CountersController.class);

   @Autowired
   private CountersService srv;

   @Autowired
   private JWTChecker jwt;
   
   @RequestMapping(value="/increment/{key}", produces = {"text/html"})
   public String increment(@PathVariable String key){
      logger.debug("increment "+ key +" called");
      return srv.increment(key);
   }

   @RequestMapping(value="/get/{key}", produces = {"text/html"})
   public String get(@PathVariable String key){
      logger.debug("get "+ key +" called");
      return srv.get(key);
   }

   @RequestMapping(value="/decrement/{key}", produces = {"text/html"})
   public String decrement(@PathVariable String key){
      logger.debug("decrement "+ key +" called");
      return srv.decrement(key);
   }
}
