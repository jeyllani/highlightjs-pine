/*
Language: pine
Author: Jeylani B <jeylanib@protonmail.com>
Website: https://github.com/jeyllani
Category: common
*/
export default function(hljs) {
    const COMMENTS = {
      className: 'comment',
      variants: [
        {
          match: '\\/\\/.*'
        }
      ]
    };
  
    const SINGLE_QUOTE_CHAR_MODE = {
      className: 'string',
      begin: '\'',
      end: '\'',
      contains: [ hljs.BACKSLASH_ESCAPE ],
      relevance: 0
    };
  
    const QUOTE_STRING_MODE = {
      className: 'string',
      begin: '"',
      end: '"',
      contains: [ hljs.BACKSLASH_ESCAPE ]
    };
  
    const OPERATORS = {
      className: 'operator',
      variants: [
        {
          match: '!='
        },
        {
          match: '%='
        },
        {
          match: '%'
        },
        {
          match: '\\*='
        },
        {
          match: '\\*'
        },
        {
          match: '\\+='
        },
        {
          match: '\\+'
        },
        {
          match: '-='
        },
        {
          match: '-'
        },
        {
          match: '\\/='
        },
        {
          match: '\\/'
        },
        {
          match: '\\<='
        },
        {
          match: '\\<'
        },
        {
          match: '\\>='
        },
        {
          match: '\\>'
        },
        {
          match: '=\\>'
        },
        {
          match: '\\=='
        },
        {
          match: '\\?'
        },
        {
          match: '\\:'
        },
        {
          match: '='
        }
      ]
    };
    const FUNCTIONS = {
      className: 'keyword',
      variants: [
        {
          match: 'alert(?=\\()'
        },
        {
          match: 'alertcondition(?=\\()'
        },
        {
          match: 'array\\.avg(?=\\()'
        },
        {
          match: 'array\\.clear(?=\\()'
        },
        {
          match: 'array\\.concat(?=\\()'
        },
        {
          match: 'array\\.copy(?=\\()'
        },
        {
          match: 'array\\.covariance(?=\\()'
        },
        {
          match: 'array\\.fill(?=\\()'
        },
        {
          match: 'array\\.from(?=\\()'
        },
        {
          match: 'array\\.get(?=\\()'
        },
        {
          match: 'array\\.includes(?=\\()'
        },
        {
          match: 'array\\.indexof(?=\\()'
        },
        {
          match: 'array\\.insert(?=\\()'
        },
        {
          match: 'array\\.join(?=\\()'
        },
        {
          match: 'array\\.lastindexof(?=\\()'
        },
        {
          match: 'array\\.max(?=\\()'
        },
        {
          match: 'array\\.median(?=\\()'
        },
        {
          match: 'array\\.min(?=\\()'
        },
        {
          match: 'array\\.mode(?=\\()'
        },
        {
          match: 'array\\.new_bool(?=\\()'
        },
        {
          match: 'array\\.new_box(?=\\()'
        },
        {
          match: 'array\\.new_color(?=\\()'
        },
        {
          match: 'array\\.new_float(?=\\()'
        },
        {
          match: 'array\\.new_int(?=\\()'
        },
        {
          match: 'array\\.new_label(?=\\()'
        },
        {
          match: 'array\\.new_line(?=\\()'
        },
        {
          match: 'array\\.new_string(?=\\()'
        },
        {
          match: 'array\\.new_table(?=\\()'
        },
        {
          match: 'array\\.pop(?=\\()'
        },
        {
          match: 'array\\.push(?=\\()'
        },
        {
          match: 'array\\.range(?=\\()'
        },
        {
          match: 'array\\.remove(?=\\()'
        },
        {
          match: 'array\\.reverse(?=\\()'
        },
        {
          match: 'array\\.set(?=\\()'
        },
        {
          match: 'array\\.shift(?=\\()'
        },
        {
          match: 'array\\.size(?=\\()'
        },
        {
          match: 'array\\.slice(?=\\()'
        },
        {
          match: 'array\\.sort(?=\\()'
        },
        {
          match: 'array\\.standardize(?=\\()'
        },
        {
          match: 'array\\.stdev(?=\\()'
        },
        {
          match: 'array\\.sum(?=\\()'
        },
        {
          match: 'array\\.unshift(?=\\()'
        },
        {
          match: 'array\\.variance(?=\\()'
        },
        {
          match: 'barcolor(?=\\()'
        },
        {
          match: 'bgcolor(?=\\()'
        },
        {
          match: 'bool(?=\\()'
        },
        {
          match: 'box(?=\\()'
        },
        {
          match: 'box\\.delete(?=\\()'
        },
        {
          match: 'box\\.get_bottom(?=\\()'
        },
        {
          match: 'box\\.get_left(?=\\()'
        },
        {
          match: 'box\\.get_right(?=\\()'
        },
        {
          match: 'box\\.get_top(?=\\()'
        },
        {
          match: 'box\\.new(?=\\()'
        },
        {
          match: 'box\\.set_bgcolor(?=\\()'
        },
        {
          match: 'box\\.set_border_color(?=\\()'
        },
        {
          match: 'box\\.set_border_style(?=\\()'
        },
        {
          match: 'box\\.set_border_width(?=\\()'
        },
        {
          match: 'box\\.set_bottom(?=\\()'
        },
        {
          match: 'box\\.set_extend(?=\\()'
        },
        {
          match: 'box\\.set_left(?=\\()'
        },
        {
          match: 'box\\.set_lefttop(?=\\()'
        },
        {
          match: 'box\\.set_right(?=\\()'
        },
        {
          match: 'box\\.set_rightbottom(?=\\()'
        },
        {
          match: 'box\\.set_top(?=\\()'
        },
        {
          match: 'color(?=\\()'
        },
        {
          match: 'color\\.b(?=\\()'
        },
        {
          match: 'color\\.from_gradient(?=\\()'
        },
        {
          match: 'color\\.g(?=\\()'
        },
        {
          match: 'color\\.new(?=\\()'
        },
        {
          match: 'color\\.r(?=\\()'
        },
        {
          match: 'color\\.rgb(?=\\()'
        },
        {
          match: 'color\\.t(?=\\()'
        },
        {
          match: 'dayofmonth(?=\\()'
        },
        {
          match: 'dayofweek(?=\\()'
        },
        {
          match: 'fill(?=\\()'
        },
        {
          match: 'fixnan(?=\\()'
        },
        {
          match: 'float(?=\\()'
        },
        {
          match: 'hline(?=\\()'
        },
        {
          match: 'hour(?=\\()'
        },
        {
          match: 'indicator(?=\\()'
        },
        {
          match: 'input(?=\\()'
        },
        {
          match: 'input\\.bool(?=\\()'
        },
        {
          match: 'input\\.color(?=\\()'
        },
        {
          match: 'input\\.float(?=\\()'
        },
        {
          match: 'input\\.int(?=\\()'
        },
        {
          match: 'input\\.price(?=\\()'
        },
        {
          match: 'input\\.session(?=\\()'
        },
        {
          match: 'input\\.source(?=\\()'
        },
        {
          match: 'input\\.string(?=\\()'
        },
        {
          match: 'input\\.symbol(?=\\()'
        },
        {
          match: 'input\\.time(?=\\()'
        },
        {
          match: 'input\\.timeframe(?=\\()'
        },
        {
          match: 'int(?=\\()'
        },
        {
          match: 'label(?=\\()'
        },
        {
          match: 'label\\.delete(?=\\()'
        },
        {
          match: 'label\\.get_text(?=\\()'
        },
        {
          match: 'label\\.get_x(?=\\()'
        },
        {
          match: 'label\\.get_y(?=\\()'
        },
        {
          match: 'label\\.new(?=\\()'
        },
        {
          match: 'label\\.set_color(?=\\()'
        },
        {
          match: 'label\\.set_size(?=\\()'
        },
        {
          match: 'label\\.set_style(?=\\()'
        },
        {
          match: 'label\\.set_text(?=\\()'
        },
        {
          match: 'label\\.set_textalign(?=\\()'
        },
        {
          match: 'label\\.set_textcolor(?=\\()'
        },
        {
          match: 'label\\.set_tooltip(?=\\()'
        },
        {
          match: 'label\\.set_x(?=\\()'
        },
        {
          match: 'label\\.set_xloc(?=\\()'
        },
        {
          match: 'label\\.set_xy(?=\\()'
        },
        {
          match: 'label\\.set_y(?=\\()'
        },
        {
          match: 'label\\.set_yloc(?=\\()'
        },
        {
          match: 'library(?=\\()'
        },
        {
          match: 'line(?=\\()'
        },
        {
          match: 'line\\.delete(?=\\()'
        },
        {
          match: 'line\\.get_price(?=\\()'
        },
        {
          match: 'line\\.get_x1(?=\\()'
        },
        {
          match: 'line\\.get_x2(?=\\()'
        },
        {
          match: 'line\\.get_y1(?=\\()'
        },
        {
          match: 'line\\.get_y2(?=\\()'
        },
        {
          match: 'line\\.new(?=\\()'
        },
        {
          match: 'line\\.set_color(?=\\()'
        },
        {
          match: 'line\\.set_extend(?=\\()'
        },
        {
          match: 'line\\.set_style(?=\\()'
        },
        {
          match: 'line\\.set_width(?=\\()'
        },
        {
          match: 'line\\.set_x1(?=\\()'
        },
        {
          match: 'line\\.set_x2(?=\\()'
        },
        {
          match: 'line\\.set_xloc(?=\\()'
        },
        {
          match: 'line\\.set_xy1(?=\\()'
        },
        {
          match: 'line\\.set_xy2(?=\\()'
        },
        {
          match: 'line\\.set_y1(?=\\()'
        },
        {
          match: 'line\\.set_y2(?=\\()'
        },
        {
          match: 'math\\.abs(?=\\()'
        },
        {
          match: 'math\\.acos(?=\\()'
        },
        {
          match: 'math\\.asin(?=\\()'
        },
        {
          match: 'math\\.atan(?=\\()'
        },
        {
          match: 'math\\.avg(?=\\()'
        },
        {
          match: 'math\\.ceil(?=\\()'
        },
        {
          match: 'math\\.cos(?=\\()'
        },
        {
          match: 'math\\.exp(?=\\()'
        },
        {
          match: 'math\\.floor(?=\\()'
        },
        {
          match: 'math\\.log(?=\\()'
        },
        {
          match: 'math\\.log10(?=\\()'
        },
        {
          match: 'math\\.max(?=\\()'
        },
        {
          match: 'math\\.min(?=\\()'
        },
        {
          match: 'math\\.pow(?=\\()'
        },
        {
          match: 'math\\.random(?=\\()'
        },
        {
          match: 'math\\.round(?=\\()'
        },
        {
          match: 'math\\.round_to_mintick(?=\\()'
        },
        {
          match: 'math\\.sign(?=\\()'
        },
        {
          match: 'math\\.sin(?=\\()'
        },
        {
          match: 'math\\.sqrt(?=\\()'
        },
        {
          match: 'math\\.sum(?=\\()'
        },
        {
          match: 'math\\.tan(?=\\()'
        },
        {
          match: 'math\\.todegrees(?=\\()'
        },
        {
          match: 'math\\.toradians(?=\\()'
        },
        {
          match: 'max_bars_back(?=\\()'
        },
        {
          match: 'minute(?=\\()'
        },
        {
          match: 'month(?=\\()'
        },
        {
          match: 'na(?=\\()'
        },
        {
          match: 'nz(?=\\()'
        },
        {
          match: 'plot(?=\\()'
        },
        {
          match: 'plotarrow(?=\\()'
        },
        {
          match: 'plotbar(?=\\()'
        },
        {
          match: 'plotcandle(?=\\()'
        },
        {
          match: 'plotchar(?=\\()'
        },
        {
          match: 'plotshape(?=\\()'
        },
        {
          match: 'request\\.dividends(?=\\()'
        },
        {
          match: 'request\\.earnings(?=\\()'
        },
        {
          match: 'request\\.financial(?=\\()'
        },
        {
          match: 'request\\.quandl(?=\\()'
        },
        {
          match: 'request\\.security(?=\\()'
        },
        {
          match: 'request\\.splits(?=\\()'
        },
        {
          match: 'runtime\\.error(?=\\()'
        },
        {
          match: 'second(?=\\()'
        },
        {
          match: 'str\\.contains(?=\\()'
        },
        {
          match: 'str\\.endswith(?=\\()'
        },
        {
          match: 'str\\.format(?=\\()'
        },
        {
          match: 'str\\.length(?=\\()'
        },
        {
          match: 'str\\.lower(?=\\()'
        },
        {
          match: 'str\\.match(?=\\()'
        },
        {
          match: 'str\\.pos(?=\\()'
        },
        {
          match: 'str\\.replace(?=\\()'
        },
        {
          match: 'str\\.replace_all(?=\\()'
        },
        {
          match: 'str\\.split(?=\\()'
        },
        {
          match: 'str\\.startswith(?=\\()'
        },
        {
          match: 'str\\.substring(?=\\()'
        },
        {
          match: 'str\\.tonumber(?=\\()'
        },
        {
          match: 'str\\.tostring(?=\\()'
        },
        {
          match: 'str\\.upper(?=\\()'
        },
        {
          match: 'strategy(?=\\()'
        },
        {
          match: 'strategy\\.cancel(?=\\()'
        },
        {
          match: 'strategy\\.cancel_all(?=\\()'
        },
        {
          match: 'strategy\\.close(?=\\()'
        },
        {
          match: 'strategy\\.close_all(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.commission(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.entry_bar_index(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.entry_price(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.entry_time(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.exit_bar_index(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.exit_price(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.exit_time(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.max_drawdown(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.max_runup(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.profit(?=\\()'
        },
        {
          match: 'strategy\\.closedtrades\\.size(?=\\()'
        },
        {
          match: 'strategy\\.convert_to_account(?=\\()'
        },
        {
          match: 'strategy\\.convert_to_symbol(?=\\()'
        },
        {
          match: 'strategy\\.entry(?=\\()'
        },
        {
          match: 'strategy\\.exit(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.commission(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.entry_bar_index(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.entry_price(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.entry_time(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.max_drawdown(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.max_runup(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.profit(?=\\()'
        },
        {
          match: 'strategy\\.opentrades\\.size(?=\\()'
        },
        {
          match: 'strategy\\.order(?=\\()'
        },
        {
          match: 'strategy\\.risk\\.allow_entry_in(?=\\()'
        },
        {
          match: 'strategy\\.risk\\.max_cons_loss_days(?=\\()'
        },
        {
          match: 'strategy\\.risk\\.max_drawdown(?=\\()'
        },
        {
          match: 'strategy\\.risk\\.max_intraday_filled_orders(?=\\()'
        },
        {
          match: 'strategy\\.risk\\.max_intraday_loss(?=\\()'
        },
        {
          match: 'strategy\\.risk\\.max_position_size(?=\\()'
        },
        {
          match: 'string(?=\\()'
        },
        {
          match: 'ta\\.alma(?=\\()'
        },
        {
          match: 'ta\\.atr(?=\\()'
        },
        {
          match: 'ta\\.barssince(?=\\()'
        },
        {
          match: 'ta\\.bb(?=\\()'
        },
        {
          match: 'ta\\.bbw(?=\\()'
        },
        {
          match: 'ta\\.cci(?=\\()'
        },
        {
          match: 'ta\\.change(?=\\()'
        },
        {
          match: 'ta\\.cmo(?=\\()'
        },
        {
          match: 'ta\\.cog(?=\\()'
        },
        {
          match: 'ta\\.correlation(?=\\()'
        },
        {
          match: 'ta\\.cross(?=\\()'
        },
        {
          match: 'ta\\.crossover(?=\\()'
        },
        {
          match: 'ta\\.crossunder(?=\\()'
        },
        {
          match: 'ta\\.cum(?=\\()'
        },
        {
          match: 'ta\\.dev(?=\\()'
        },
        {
          match: 'ta\\.dmi(?=\\()'
        },
        {
          match: 'ta\\.ema(?=\\()'
        },
        {
          match: 'ta\\.falling(?=\\()'
        },
        {
          match: 'ta\\.highest(?=\\()'
        },
        {
          match: 'ta\\.highestbars(?=\\()'
        },
        {
          match: 'ta\\.hma(?=\\()'
        },
        {
          match: 'ta\\.kc(?=\\()'
        },
        {
          match: 'ta\\.kcw(?=\\()'
        },
        {
          match: 'ta\\.linreg(?=\\()'
        },
        {
          match: 'ta\\.lowest(?=\\()'
        },
        {
          match: 'ta\\.lowestbars(?=\\()'
        },
        {
          match: 'ta\\.macd(?=\\()'
        },
        {
          match: 'ta\\.median(?=\\()'
        },
        {
          match: 'ta\\.mfi(?=\\()'
        },
        {
          match: 'ta\\.mode(?=\\()'
        },
        {
          match: 'ta\\.mom(?=\\()'
        },
        {
          match: 'ta\\.percentile_linear_interpolation(?=\\()'
        },
        {
          match: 'ta\\.percentile_nearest_rank(?=\\()'
        },
        {
          match: 'ta\\.percentrank(?=\\()'
        },
        {
          match: 'ta\\.pivothigh(?=\\()'
        },
        {
          match: 'ta\\.pivotlow(?=\\()'
        },
        {
          match: 'ta\\.range(?=\\()'
        },
        {
          match: 'ta\\.rising(?=\\()'
        },
        {
          match: 'ta\\.rma(?=\\()'
        },
        {
          match: 'ta\\.roc(?=\\()'
        },
        {
          match: 'ta\\.rsi(?=\\()'
        },
        {
          match: 'ta\\.sar(?=\\()'
        },
        {
          match: 'ta\\.sma(?=\\()'
        },
        {
          match: 'ta\\.stdev(?=\\()'
        },
        {
          match: 'ta\\.stoch(?=\\()'
        },
        {
          match: 'ta\\.supertrend(?=\\()'
        },
        {
          match: 'ta\\.swma(?=\\()'
        },
        {
          match: 'ta\\.tr(?=\\()'
        },
        {
          match: 'ta\\.tsi(?=\\()'
        },
        {
          match: 'ta\\.valuewhen(?=\\()'
        },
        {
          match: 'ta\\.variance(?=\\()'
        },
        {
          match: 'ta\\.vwap(?=\\()'
        },
        {
          match: 'ta\\.vwma(?=\\()'
        },
        {
          match: 'ta\\.wma(?=\\()'
        },
        {
          match: 'ta\\.wpr(?=\\()'
        },
        {
          match: 'table(?=\\()'
        },
        {
          match: 'table\\.cell(?=\\()'
        },
        {
          match: 'table\\.cell_set_bgcolor(?=\\()'
        },
        {
          match: 'table\\.cell_set_height(?=\\()'
        },
        {
          match: 'table\\.cell_set_text(?=\\()'
        },
        {
          match: 'table\\.cell_set_text_color(?=\\()'
        },
        {
          match: 'table\\.cell_set_text_halign(?=\\()'
        },
        {
          match: 'table\\.cell_set_text_size(?=\\()'
        },
        {
          match: 'table\\.cell_set_text_valign(?=\\()'
        },
        {
          match: 'table\\.cell_set_width(?=\\()'
        },
        {
          match: 'table\\.clear(?=\\()'
        },
        {
          match: 'table\\.delete(?=\\()'
        },
        {
          match: 'table\\.new(?=\\()'
        },
        {
          match: 'table\\.set_bgcolor(?=\\()'
        },
        {
          match: 'table\\.set_border_color(?=\\()'
        },
        {
          match: 'table\\.set_border_width(?=\\()'
        },
        {
          match: 'table\\.set_frame_color(?=\\()'
        },
        {
          match: 'table\\.set_frame_width(?=\\()'
        },
        {
          match: 'table\\.set_position(?=\\()'
        },
        {
          match: 'ticker\\.heikinashi(?=\\()'
        },
        {
          match: 'ticker\\.kagi(?=\\()'
        },
        {
          match: 'ticker\\.linebreak(?=\\()'
        },
        {
          match: 'ticker\\.modify(?=\\()'
        },
        {
          match: 'ticker\\.new(?=\\()'
        },
        {
          match: 'ticker\\.pointfigure(?=\\()'
        },
        {
          match: 'ticker\\.renko(?=\\()'
        },
        {
          match: 'time(?=\\()'
        },
        {
          match: 'time_close(?=\\()'
        },
        {
          match: 'timestamp(?=\\()'
        },
        {
          match: 'weekofyear(?=\\()'
        },
        {
          match: 'year(?=\\()'
        }
      ]
    };
  
    const BUILT_IN_VARIABLES = {
      className: 'built_in',
      variants: [
        {
          match: 'adjustment\\.dividends\\b'
        },
        {
          match: 'adjustment\\.none\\b'
        },
        {
          match: 'adjustment\\.splits\\b'
        },
        {
          match: 'alert\\.freq_all\\b'
        },
        {
          match: 'alert\\.freq_once_per_bar\\b'
        },
        {
          match: 'alert\\.freq_once_per_bar_close\\b'
        },
        {
          match: 'bar_index\\b'
        },
        {
          match: 'barmerge\\.gaps_off\\b'
        },
        {
          match: 'barmerge\\.gaps_on\\b'
        },
        {
          match: 'barmerge\\.lookahead_off\\b'
        },
        {
          match: 'barmerge\\.lookahead_on\\b'
        },
        {
          match: 'barstate\\.isconfirmed\\b'
        },
        {
          match: 'barstate\\.isfirst\\b'
        },
        {
          match: 'barstate\\.ishistory\\b'
        },
        {
          match: 'barstate\\.islast\\b'
        },
        {
          match: 'barstate\\.islastconfirmedhistory\\b'
        },
        {
          match: 'barstate\\.isnew\\b'
        },
        {
          match: 'barstate\\.isrealtime\\b'
        },
        {
          match: 'box\\.all\\b'
        },
        {
          match: 'close\\b'
        },
        {
          match: 'color\\.aqua\\b'
        },
        {
          match: 'color\\.black\\b'
        },
        {
          match: 'color\\.blue\\b'
        },
        {
          match: 'color\\.fuchsia\\b'
        },
        {
          match: 'color\\.gray\\b'
        },
        {
          match: 'color\\.green\\b'
        },
        {
          match: 'color\\.lime\\b'
        },
        {
          match: 'color\\.maroon\\b'
        },
        {
          match: 'color\\.navy\\b'
        },
        {
          match: 'color\\.olive\\b'
        },
        {
          match: 'color\\.orange\\b'
        },
        {
          match: 'color\\.purple\\b'
        },
        {
          match: 'color\\.red\\b'
        },
        {
          match: 'color\\.silver\\b'
        },
        {
          match: 'color\\.teal\\b'
        },
        {
          match: 'color\\.white\\b'
        },
        {
          match: 'color\\.yellow\\b'
        },
        {
          match: 'currency\\.AUD\\b'
        },
        {
          match: 'currency\\.CAD\\b'
        },
        {
          match: 'currency\\.CHF\\b'
        },
        {
          match: 'currency\\.EUR\\b'
        },
        {
          match: 'currency\\.GBP\\b'
        },
        {
          match: 'currency\\.HKD\\b'
        },
        {
          match: 'currency\\.JPY\\b'
        },
        {
          match: 'currency\\.NOK\\b'
        },
        {
          match: 'currency\\.NONE\\b'
        },
        {
          match: 'currency\\.NZD\\b'
        },
        {
          match: 'currency\\.RUB\\b'
        },
        {
          match: 'currency\\.SEK\\b'
        },
        {
          match: 'currency\\.SGD\\b'
        },
        {
          match: 'currency\\.TRY\\b'
        },
        {
          match: 'currency\\.USD\\b'
        },
        {
          match: 'currency\\.ZAR\\b'
        },
        {
          match: 'dayofmonth\\b'
        },
        {
          match: 'dayofweek\\.friday\\b'
        },
        {
          match: 'dayofweek\\.monday\\b'
        },
        {
          match: 'dayofweek\\.saturday\\b'
        },
        {
          match: 'dayofweek\\.sunday\\b'
        },
        {
          match: 'dayofweek\\.thursday\\b'
        },
        {
          match: 'dayofweek\\.tuesday\\b'
        },
        {
          match: 'dayofweek\\.wednesday\\b'
        },
        {
          match: 'dayofweek\\b'
        },
        {
          match: 'display\\.all\\b'
        },
        {
          match: 'display\\.none\\b'
        },
        {
          match: 'dividends\\.gross\\b'
        },
        {
          match: 'dividends\\.net\\b'
        },
        {
          match: 'earnings\\.actual\\b'
        },
        {
          match: 'earnings\\.estimate\\b'
        },
        {
          match: 'earnings\\.standardized\\b'
        },
        {
          match: 'extend\\.both\\b'
        },
        {
          match: 'extend\\.left\\b'
        },
        {
          match: 'extend\\.none\\b'
        },
        {
          match: 'extend\\.right\\b'
        },
        {
          match: 'format\\.inherit\\b'
        },
        {
          match: 'format\\.mintick\\b'
        },
        {
          match: 'format\\.percent\\b'
        },
        {
          match: 'format\\.price\\b'
        },
        {
          match: 'format\\.volume\\b'
        },
        {
          match: 'high\\b'
        },
        {
          match: 'hl2\\b'
        },
        {
          match: 'hlc3\\b'
        },
        {
          match: 'hline\\.style_dashed\\b'
        },
        {
          match: 'hline\\.style_dotted\\b'
        },
        {
          match: 'hline\\.style_solid\\b'
        },
        {
          match: 'hour\\b'
        },
        {
          match: 'label\\.all\\b'
        },
        {
          match: 'label\\.style_arrowdown\\b'
        },
        {
          match: 'label\\.style_arrowup\\b'
        },
        {
          match: 'label\\.style_circle\\b'
        },
        {
          match: 'label\\.style_cross\\b'
        },
        {
          match: 'label\\.style_diamond\\b'
        },
        {
          match: 'label\\.style_flag\\b'
        },
        {
          match: 'label\\.style_label_center\\b'
        },
        {
          match: 'label\\.style_label_down\\b'
        },
        {
          match: 'label\\.style_label_left\\b'
        },
        {
          match: 'label\\.style_label_lower_left\\b'
        },
        {
          match: 'label\\.style_label_lower_right\\b'
        },
        {
          match: 'label\\.style_label_right\\b'
        },
        {
          match: 'label\\.style_label_up\\b'
        },
        {
          match: 'label\\.style_label_upper_left\\b'
        },
        {
          match: 'label\\.style_label_upper_right\\b'
        },
        {
          match: 'label\\.style_none\\b'
        },
        {
          match: 'label\\.style_square\\b'
        },
        {
          match: 'label\\.style_triangledown\\b'
        },
        {
          match: 'label\\.style_triangleup\\b'
        },
        {
          match: 'label\\.style_xcross\\b'
        },
        {
          match: 'line\\.all\\b'
        },
        {
          match: 'line\\.style_arrow_both\\b'
        },
        {
          match: 'line\\.style_arrow_left\\b'
        },
        {
          match: 'line\\.style_arrow_right\\b'
        },
        {
          match: 'line\\.style_dashed\\b'
        },
        {
          match: 'line\\.style_dotted\\b'
        },
        {
          match: 'line\\.style_solid\\b'
        },
        {
          match: 'location\\.abovebar\\b'
        },
        {
          match: 'location\\.absolute\\b'
        },
        {
          match: 'location\\.belowbar\\b'
        },
        {
          match: 'location\\.bottom\\b'
        },
        {
          match: 'location\\.top\\b'
        },
        {
          match: 'low\\b'
        },
        {
          match: 'math\\.e\\b'
        },
        {
          match: 'math\\.phi\\b'
        },
        {
          match: 'math\\.pi\\b'
        },
        {
          match: 'math\\.rphi\\b'
        },
        {
          match: 'minute\\b'
        },
        {
          match: 'month\\b'
        },
        {
          match: 'na\\b'
        },
        {
          match: 'ohlc4\\b'
        },
        {
          match: 'open\\b'
        },
        {
          match: 'order\\.ascending\\b'
        },
        {
          match: 'order\\.descending\\b'
        },
        {
          match: 'plot\\.style_area\\b'
        },
        {
          match: 'plot\\.style_areabr\\b'
        },
        {
          match: 'plot\\.style_circles\\b'
        },
        {
          match: 'plot\\.style_columns\\b'
        },
        {
          match: 'plot\\.style_cross\\b'
        },
        {
          match: 'plot\\.style_histogram\\b'
        },
        {
          match: 'plot\\.style_line\\b'
        },
        {
          match: 'plot\\.style_linebr\\b'
        },
        {
          match: 'plot\\.style_stepline\\b'
        },
        {
          match: 'plot\\.style_stepline_diamond\\b'
        },
        {
          match: 'position\\.bottom_center\\b'
        },
        {
          match: 'position\\.bottom_left\\b'
        },
        {
          match: 'position\\.bottom_right\\b'
        },
        {
          match: 'position\\.middle_center\\b'
        },
        {
          match: 'position\\.middle_left\\b'
        },
        {
          match: 'position\\.middle_right\\b'
        },
        {
          match: 'position\\.top_center\\b'
        },
        {
          match: 'position\\.top_left\\b'
        },
        {
          match: 'position\\.top_right\\b'
        },
        {
          match: 'scale\\.left\\b'
        },
        {
          match: 'scale\\.none\\b'
        },
        {
          match: 'scale\\.right\\b'
        },
        {
          match: 'second\\b'
        },
        {
          match: 'session\\.extended\\b'
        },
        {
          match: 'session\\.ismarket\\b'
        },
        {
          match: 'session\\.ispostmarket\\b'
        },
        {
          match: 'session\\.ispremarket\\b'
        },
        {
          match: 'session\\.regular\\b'
        },
        {
          match: 'shape\\.arrowdown\\b'
        },
        {
          match: 'shape\\.arrowup\\b'
        },
        {
          match: 'shape\\.circle\\b'
        },
        {
          match: 'shape\\.cross\\b'
        },
        {
          match: 'shape\\.diamond\\b'
        },
        {
          match: 'shape\\.flag\\b'
        },
        {
          match: 'shape\\.labeldown\\b'
        },
        {
          match: 'shape\\.labelup\\b'
        },
        {
          match: 'shape\\.square\\b'
        },
        {
          match: 'shape\\.triangledown\\b'
        },
        {
          match: 'shape\\.triangleup\\b'
        },
        {
          match: 'shape\\.xcross\\b'
        },
        {
          match: 'size\\.auto\\b'
        },
        {
          match: 'size\\.huge\\b'
        },
        {
          match: 'size\\.large\\b'
        },
        {
          match: 'size\\.normal\\b'
        },
        {
          match: 'size\\.small\\b'
        },
        {
          match: 'size\\.tiny\\b'
        },
        {
          match: 'splits\\.denominator\\b'
        },
        {
          match: 'splits\\.numerator\\b'
        },
        {
          match: 'strategy\\.account_currency\\b'
        },
        {
          match: 'strategy\\.cash\\b'
        },
        {
          match: 'strategy\\.closedtrades\\b'
        },
        {
          match: 'strategy\\.commission\\.cash_per_contract\\b'
        },
        {
          match: 'strategy\\.commission\\.cash_per_order\\b'
        },
        {
          match: 'strategy\\.commission\\.percent\\b'
        },
        {
          match: 'strategy\\.direction\\.all\\b'
        },
        {
          match: 'strategy\\.direction\\.long\\b'
        },
        {
          match: 'strategy\\.direction\\.short\\b'
        },
        {
          match: 'strategy\\.equity\\b'
        },
        {
          match: 'strategy\\.eventrades\\b'
        },
        {
          match: 'strategy\\.fixed\\b'
        },
        {
          match: 'strategy\\.grossloss\\b'
        },
        {
          match: 'strategy\\.grossprofit\\b'
        },
        {
          match: 'strategy\\.initial_capital\\b'
        },
        {
          match: 'strategy\\.long\\b'
        },
        {
          match: 'strategy\\.losstrades\\b'
        },
        {
          match: 'strategy\\.max_contracts_held_all\\b'
        },
        {
          match: 'strategy\\.max_contracts_held_long\\b'
        },
        {
          match: 'strategy\\.max_contracts_held_short\\b'
        },
        {
          match: 'strategy\\.max_drawdown\\b'
        },
        {
          match: 'strategy\\.netprofit\\b'
        },
        {
          match: 'strategy\\.oca\\.cancel\\b'
        },
        {
          match: 'strategy\\.oca\\.none\\b'
        },
        {
          match: 'strategy\\.oca\\.reduce\\b'
        },
        {
          match: 'strategy\\.openprofit\\b'
        },
        {
          match: 'strategy\\.opentrades\\b'
        },
        {
          match: 'strategy\\.percent_of_equity\\b'
        },
        {
          match: 'strategy\\.position_avg_price\\b'
        },
        {
          match: 'strategy\\.position_entry_name\\b'
        },
        {
          match: 'strategy\\.position_size\\b'
        },
        {
          match: 'strategy\\.short\\b'
        },
        {
          match: 'strategy\\.wintrades\\b'
        },
        {
          match: 'syminfo\\.basecurrency\\b'
        },
        {
          match: 'syminfo\\.currency\\b'
        },
        {
          match: 'syminfo\\.description\\b'
        },
        {
          match: 'syminfo\\.mintick\\b'
        },
        {
          match: 'syminfo\\.pointvalue\\b'
        },
        {
          match: 'syminfo\\.prefix\\b'
        },
        {
          match: 'syminfo\\.root\\b'
        },
        {
          match: 'syminfo\\.session\\b'
        },
        {
          match: 'syminfo\\.ticker\\b'
        },
        {
          match: 'syminfo\\.tickerid\\b'
        },
        {
          match: 'syminfo\\.timezone\\b'
        },
        {
          match: 'syminfo\\.type\\b'
        },
        {
          match: 'ta\\.accdist\\b'
        },
        {
          match: 'ta\\.iii\\b'
        },
        {
          match: 'ta\\.nvi\\b'
        },
        {
          match: 'ta\\.obv\\b'
        },
        {
          match: 'ta\\.pvi\\b'
        },
        {
          match: 'ta\\.pvt\\b'
        },
        {
          match: 'ta\\.tr\\b'
        },
        {
          match: 'ta\\.vwap\\b'
        },
        {
          match: 'ta\\.wad\\b'
        },
        {
          match: 'ta\\.wvad\\b'
        },
        {
          match: 'table\\.all\\b'
        },
        {
          match: 'text\\.align_bottom\\b'
        },
        {
          match: 'text\\.align_center\\b'
        },
        {
          match: 'text\\.align_left\\b'
        },
        {
          match: 'text\\.align_right\\b'
        },
        {
          match: 'text\\.align_top\\b'
        },
        {
          match: 'time\\b'
        },
        {
          match: 'time_close\\b'
        },
        {
          match: 'time_tradingday\\b'
        },
        {
          match: 'timeframe\\.isdaily\\b'
        },
        {
          match: 'timeframe\\.isdwm\\b'
        },
        {
          match: 'timeframe\\.isintraday\\b'
        },
        {
          match: 'timeframe\\.isminutes\\b'
        },
        {
          match: 'timeframe\\.ismonthly\\b'
        },
        {
          match: 'timeframe\\.isseconds\\b'
        },
        {
          match: 'timeframe\\.isweekly\\b'
        },
        {
          match: 'timeframe\\.multiplier\\b'
        },
        {
          match: 'timeframe\\.period\\b'
        },
        {
          match: 'timenow\\b'
        },
        {
          match: 'volume\\b'
        },
        {
          match: 'weekofyear\\b'
        },
        {
          match: 'xloc\\.bar_index\\b'
        },
        {
          match: 'xloc\\.bar_time\\b'
        },
        {
          match: 'year\\b'
        },
        {
          match: 'yloc\\.abovebar\\b'
        },
        {
          match: 'yloc\\.belowbar\\b'
        },
        {
          match: 'yloc\\.price\\b'
        }
  
      ]
    };
    const KEYWORDS = [
      'if',
      'and',
      'export',
      'else',
      'for',
      'if',
      'import',
      'not',
      'or',
      'series',
      'simple',
      'switch',
      'var',
      'varip',
      'while',
      'bool',
      'int',
      'float',
      'label',
      'array',
      'series',
      'color'
    ];
    const LITERALS = [
      "true",
      "false"
    ];
  
    return {
      name: 'pine',
      aliases: [
        'pine',
        'pinescript',
        'ps',
        'tvps'
      ],
      case_sensitive: true,
      keywords: {
        keyword: KEYWORDS,
        literal: LITERALS
      },
      contains: [
        SINGLE_QUOTE_CHAR_MODE,
        QUOTE_STRING_MODE,
        COMMENTS,
        OPERATORS,
        FUNCTIONS,
        BUILT_IN_VARIABLES,
        hljs.C_NUMBER_MODE,
        {
          className: 'variable',
          begin: '\\[A-Za-z0-9_]+'
        },
        {
          className: 'number',
          begin: '\\[0-9]+'
        }
      ]
    };
  }
  