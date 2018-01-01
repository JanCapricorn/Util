﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Donau.Services.Abstractions.Customers;
using Donau.Services.Dtos.Customers;
using Donau.Services.Queries.Customers;
using Microsoft.AspNetCore.Mvc;
using Util.Exceptions;
using Util.Webs.Controllers;

namespace Util.Samples.Webs.Api.Customers
{
    public class CustomersController : CrudControllerBase<CustomersDto, CustomersQuery>
    {
        public CustomersController(ICustomersService customersService) : base(customersService)
        {
        }

        [HttpGet("test")]
        public IActionResult Test() {
            List<Item> items = new List<Item> {
                new Item( "成功","1",2 ),
                new Item( "失败","2",1 ),
                new Item( "成功","3",4 ),
                new Item( "失败","4",3 ),
            };
            return Success( items );
        }
    }
}
