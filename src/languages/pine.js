/*
Language: pine
Author: Jeylani B <jeylanib@protonmail.com>
Website: https://github.com/jeyllani
Category: common
*/
export default function (hljs) {
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
    contains: [hljs.BACKSLASH_ESCAPE],
    relevance: 0
  };

  const QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"',
    end: '"',
    contains: [hljs.BACKSLASH_ESCAPE]
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
        match: '\\:='
      },
      {
        match: '\\:'
      }
    ]
  };

  const FUNCTIONS = {
    className: 'section',
    variants: [
      {
        match: '\\balert(?=\\()'
      },
      {
        match: '\\balertcondition(?=\\()'
      },
      {
        match: '\\barray\\.avg(?=\\()'
      },
      {
        match: '\\barray\\.clear(?=\\()'
      },
      {
        match: '\\barray\\.concat(?=\\()'
      },
      {
        match: '\\barray\\.copy(?=\\()'
      },
      {
        match: '\\barray\\.covariance(?=\\()'
      },
      {
        match: '\\barray\\.fill(?=\\()'
      },
      {
        match: '\\barray\\.from(?=\\()'
      },
      {
        match: '\\barray\\.get(?=\\()'
      },
      {
        match: '\\barray\\.includes(?=\\()'
      },
      {
        match: '\\barray\\.indexof(?=\\()'
      },
      {
        match: '\\barray\\.insert(?=\\()'
      },
      {
        match: '\\barray\\.join(?=\\()'
      },
      {
        match: '\\barray\\.lastindexof(?=\\()'
      },
      {
        match: '\\barray\\.max(?=\\()'
      },
      {
        match: '\\barray\\.median(?=\\()'
      },
      {
        match: '\\barray\\.min(?=\\()'
      },
      {
        match: '\\barray\\.mode(?=\\()'
      },
      {
        match: '\\barray\\.new_bool(?=\\()'
      },
      {
        match: '\\barray\\.new_box(?=\\()'
      },
      {
        match: '\\barray\\.new_color(?=\\()'
      },
      {
        match: '\\barray\\.new_float(?=\\()'
      },
      {
        match: '\\barray\\.new_int(?=\\()'
      },
      {
        match: '\\barray\\.new_label(?=\\()'
      },
      {
        match: '\\barray\\.new_line(?=\\()'
      },
      {
        match: '\\barray\\.new_string(?=\\()'
      },
      {
        match: '\\barray\\.new_table(?=\\()'
      },
      {
        match: '\\barray\\.pop(?=\\()'
      },
      {
        match: '\\barray\\.push(?=\\()'
      },
      {
        match: '\\barray\\.range(?=\\()'
      },
      {
        match: '\\barray\\.remove(?=\\()'
      },
      {
        match: '\\barray\\.reverse(?=\\()'
      },
      {
        match: '\\barray\\.set(?=\\()'
      },
      {
        match: '\\barray\\.shift(?=\\()'
      },
      {
        match: '\\barray\\.size(?=\\()'
      },
      {
        match: '\\barray\\.slice(?=\\()'
      },
      {
        match: '\\barray\\.sort(?=\\()'
      },
      {
        match: '\\barray\\.standardize(?=\\()'
      },
      {
        match: '\\barray\\.stdev(?=\\()'
      },
      {
        match: '\\barray\\.sum(?=\\()'
      },
      {
        match: '\\barray\\.unshift(?=\\()'
      },
      {
        match: '\\barray\\.variance(?=\\()'
      },
      {
        match: '\\bbarcolor(?=\\()'
      },
      {
        match: '\\bbgcolor(?=\\()'
      },
      {
        match: '\\bbool(?=\\()'
      },
      {
        match: '\\bbox(?=\\()'
      },
      {
        match: '\\bbox\\.delete(?=\\()'
      },
      {
        match: '\\bbox\\.get_bottom(?=\\()'
      },
      {
        match: '\\bbox\\.get_left(?=\\()'
      },
      {
        match: '\\bbox\\.get_right(?=\\()'
      },
      {
        match: '\\bbox\\.get_top(?=\\()'
      },
      {
        match: '\\bbox\\.new(?=\\()'
      },
      {
        match: '\\bbox\\.set_bgcolor(?=\\()'
      },
      {
        match: '\\bbox\\.set_border_color(?=\\()'
      },
      {
        match: '\\bbox\\.set_border_style(?=\\()'
      },
      {
        match: '\\bbox\\.set_border_width(?=\\()'
      },
      {
        match: '\\bbox\\.set_bottom(?=\\()'
      },
      {
        match: '\\bbox\\.set_extend(?=\\()'
      },
      {
        match: '\\bbox\\.set_left(?=\\()'
      },
      {
        match: '\\bbox\\.set_lefttop(?=\\()'
      },
      {
        match: '\\bbox\\.set_right(?=\\()'
      },
      {
        match: '\\bbox\\.set_rightbottom(?=\\()'
      },
      {
        match: '\\bbox\\.set_top(?=\\()'
      },
      {
        match: '\\bcolor(?=\\()'
      },
      {
        match: '\\bcolor\\.b(?=\\()'
      },
      {
        match: '\\bcolor\\.from_gradient(?=\\()'
      },
      {
        match: '\\bcolor\\.g(?=\\()'
      },
      {
        match: '\\bcolor\\.new(?=\\()'
      },
      {
        match: '\\bcolor\\.r(?=\\()'
      },
      {
        match: '\\bcolor\\.rgb(?=\\()'
      },
      {
        match: '\\bcolor\\.t(?=\\()'
      },
      {
        match: '\\bdayofmonth(?=\\()'
      },
      {
        match: '\\bdayofweek(?=\\()'
      },
      {
        match: '\\bfill(?=\\()'
      },
      {
        match: '\\bfixnan(?=\\()'
      },
      {
        match: '\\bfloat(?=\\()'
      },
      {
        match: '\\bhline(?=\\()'
      },
      {
        match: '\\bhour(?=\\()'
      },
      {
        match: '\\bindicator(?=\\()'
      },
      {
        match: '\\binput(?=\\()'
      },
      {
        match: '\\binput\\.bool(?=\\()'
      },
      {
        match: '\\binput\\.color(?=\\()'
      },
      {
        match: '\\binput\\.float(?=\\()'
      },
      {
        match: '\\binput\\.int(?=\\()'
      },
      {
        match: '\\binput\\.price(?=\\()'
      },
      {
        match: '\\binput\\.session(?=\\()'
      },
      {
        match: '\\binput\\.source(?=\\()'
      },
      {
        match: '\\binput\\.string(?=\\()'
      },
      {
        match: '\\binput\\.symbol(?=\\()'
      },
      {
        match: '\\binput\\.time(?=\\()'
      },
      {
        match: '\\binput\\.timeframe(?=\\()'
      },
      {
        match: '\\bint(?=\\()'
      },
      {
        match: '\\blabel(?=\\()'
      },
      {
        match: '\\blabel\\.delete(?=\\()'
      },
      {
        match: '\\blabel\\.get_text(?=\\()'
      },
      {
        match: '\\blabel\\.get_x(?=\\()'
      },
      {
        match: '\\blabel\\.get_y(?=\\()'
      },
      {
        match: '\\blabel\\.new(?=\\()'
      },
      {
        match: '\\blabel\\.set_color(?=\\()'
      },
      {
        match: '\\blabel\\.set_size(?=\\()'
      },
      {
        match: '\\blabel\\.set_style(?=\\()'
      },
      {
        match: '\\blabel\\.set_text(?=\\()'
      },
      {
        match: '\\blabel\\.set_textalign(?=\\()'
      },
      {
        match: '\\blabel\\.set_textcolor(?=\\()'
      },
      {
        match: '\\blabel\\.set_tooltip(?=\\()'
      },
      {
        match: '\\blabel\\.set_x(?=\\()'
      },
      {
        match: '\\blabel\\.set_xloc(?=\\()'
      },
      {
        match: '\\blabel\\.set_xy(?=\\()'
      },
      {
        match: '\\blabel\\.set_y(?=\\()'
      },
      {
        match: '\\blabel\\.set_yloc(?=\\()'
      },
      {
        match: '\\blibrary(?=\\()'
      },
      {
        match: '\\b\\line(?=\\()'
      },
      {
        match: '\\bline\\.delete(?=\\()'
      },
      {
        match: '\\bline\\.get_price(?=\\()'
      },
      {
        match: '\\bline\\.get_x1(?=\\()'
      },
      {
        match: '\\bline\\.get_x2(?=\\()'
      },
      {
        match: '\\bline\\.get_y1(?=\\()'
      },
      {
        match: '\\bline\\.get_y2(?=\\()'
      },
      {
        match: '\\bline\\.new(?=\\()'
      },
      {
        match: '\\bline\\.set_color(?=\\()'
      },
      {
        match: '\\bline\\.set_extend(?=\\()'
      },
      {
        match: '\\bline\\.set_style(?=\\()'
      },
      {
        match: '\\bline\\.set_width(?=\\()'
      },
      {
        match: '\\bline\\.set_x1(?=\\()'
      },
      {
        match: '\\bline\\.set_x2(?=\\()'
      },
      {
        match: '\\bline\\.set_xloc(?=\\()'
      },
      {
        match: '\\bline\\.set_xy1(?=\\()'
      },
      {
        match: '\\bline\\.set_xy2(?=\\()'
      },
      {
        match: '\\bline\\.set_y1(?=\\()'
      },
      {
        match: '\\bline\\.set_y2(?=\\()'
      },
      {
        match: '\\bmath\\.abs(?=\\()'
      },
      {
        match: '\\bmath\\.acos(?=\\()'
      },
      {
        match: '\\bmath\\.asin(?=\\()'
      },
      {
        match: '\\bmath\\.atan(?=\\()'
      },
      {
        match: '\\bmath\\.avg(?=\\()'
      },
      {
        match: '\\bmath\\.ceil(?=\\()'
      },
      {
        match: '\\bmath\\.cos(?=\\()'
      },
      {
        match: '\\bmath\\.exp(?=\\()'
      },
      {
        match: '\\bmath\\.floor(?=\\()'
      },
      {
        match: '\\bmath\\.log(?=\\()'
      },
      {
        match: '\\bmath\\.log10(?=\\()'
      },
      {
        match: '\\bmath\\.max(?=\\()'
      },
      {
        match: '\\bmath\\.min(?=\\()'
      },
      {
        match: '\\bmath\\.pow(?=\\()'
      },
      {
        match: '\\bmath\\.random(?=\\()'
      },
      {
        match: '\\bmath\\.round(?=\\()'
      },
      {
        match: '\\bmath\\.round_to_mintick(?=\\()'
      },
      {
        match: '\\bmath\\.sign(?=\\()'
      },
      {
        match: '\\bmath\\.sin(?=\\()'
      },
      {
        match: '\\bmath\\.sqrt(?=\\()'
      },
      {
        match: '\\bmath\\.sum(?=\\()'
      },
      {
        match: '\\bmath\\.tan(?=\\()'
      },
      {
        match: '\\bmath\\.todegrees(?=\\()'
      },
      {
        match: '\\bmath\\.toradians(?=\\()'
      },
      {
        match: '\\bmax_bars_back(?=\\()'
      },
      {
        match: '\\bminute(?=\\()'
      },
      {
        match: '\\bmonth(?=\\()'
      },
      {
        match: '\\bna(?=\\()'
      },
      {
        match: '\\bnz(?=\\()'
      },
      {
        match: '\\bplot(?=\\()'
      },
      {
        match: '\\bplotarrow(?=\\()'
      },
      {
        match: '\\bplotbar(?=\\()'
      },
      {
        match: '\\bplotcandle(?=\\()'
      },
      {
        match: '\\bplotchar(?=\\()'
      },
      {
        match: '\\bplotshape(?=\\()'
      },
      {
        match: '\\brequest\\.dividends(?=\\()'
      },
      {
        match: '\\brequest\\.earnings(?=\\()'
      },
      {
        match: '\\brequest\\.financial(?=\\()'
      },
      {
        match: '\\brequest\\.quandl(?=\\()'
      },
      {
        match: '\\brequest\\.security(?=\\()'
      },
      {
        match: '\\brequest\\.splits(?=\\()'
      },
      {
        match: '\\bruntime\\.error(?=\\()'
      },
      {
        match: '\\bsecond(?=\\()'
      },
      {
        match: '\\bstr\\.contains(?=\\()'
      },
      {
        match: '\\bstr\\.endswith(?=\\()'
      },
      {
        match: '\\bstr\\.format(?=\\()'
      },
      {
        match: '\\bstr\\.length(?=\\()'
      },
      {
        match: '\\bstr\\.lower(?=\\()'
      },
      {
        match: '\\bstr\\.match(?=\\b\\()'
      },
      {
        match: '\\bstr\\.pos(?=\\()'
      },
      {
        match: '\\bstr\\.replace(?=\\()'
      },
      {
        match: '\\bstr\\.replace_all(?=\\()'
      },
      {
        match: '\\bstr\\.split(?=\\()'
      },
      {
        match: '\\bstr\\.startswith(?=\\()'
      },
      {
        match: '\\bstr\\.substring(?=\\()'
      },
      {
        match: '\\bstr\\.tonumber(?=\\()'
      },
      {
        match: '\\bstr\\.tostring(?=\\()'
      },
      {
        match: '\\bstr\\.upper(?=\\()'
      },
      {
        match: '\\bstrategy(?=\\()'
      },
      {
        match: '\\bstrategy\\.cancel(?=\\()'
      },
      {
        match: '\\bstrategy\\.cancel_all(?=\\()'
      },
      {
        match: '\\bstrategy\\.close(?=\\()'
      },
      {
        match: '\\bstrategy\\.close_all(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.commission(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.entry_bar_index(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.entry_price(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.entry_time(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.exit_bar_index(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.exit_price(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.exit_time(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.max_drawdown(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.max_runup(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.profit(?=\\()'
      },
      {
        match: '\\bstrategy\\.closedtrades\\.size(?=\\()'
      },
      {
        match: '\\bstrategy\\.convert_to_account(?=\\()'
      },
      {
        match: '\\bstrategy\\.convert_to_symbol(?=\\()'
      },
      {
        match: '\\bstrategy\\.entry(?=\\()'
      },
      {
        match: '\\bstrategy\\.exit(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.commission(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.entry_bar_index(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.entry_price(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.entry_time(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.max_drawdown(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.max_runup(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.profit(?=\\()'
      },
      {
        match: '\\bstrategy\\.opentrades\\.size(?=\\()'
      },
      {
        match: '\\bstrategy\\.order(?=\\()'
      },
      {
        match: '\\bstrategy\\.risk\\.allow_entry_in(?=\\()'
      },
      {
        match: '\\bstrategy\\.risk\\.max_cons_loss_days(?=\\()'
      },
      {
        match: '\\bstrategy\\.risk\\.max_drawdown(?=\\()'
      },
      {
        match: '\\bstrategy\\.risk\\.max_intraday_filled_orders(?=\\()'
      },
      {
        match: '\\bstrategy\\.risk\\.max_intraday_loss(?=\\()'
      },
      {
        match: '\\bstrategy\\.risk\\.max_position_size(?=\\()'
      },
      {
        match: '\\bstring(?=\\()'
      },
      {
        match: '\\bta\\.alma(?=\\()'
      },
      {
        match: '\\bta\\.atr(?=\\()'
      },
      {
        match: '\\bta\\.barssince(?=\\()'
      },
      {
        match: '\\bta\\.bb(?=\\()'
      },
      {
        match: '\\bta\\.bbw(?=\\()'
      },
      {
        match: '\\bta\\.cci(?=\\()'
      },
      {
        match: '\\bta\\.change(?=\\()'
      },
      {
        match: '\\bta\\.cmo(?=\\()'
      },
      {
        match: '\\bta\\.cog(?=\\()'
      },
      {
        match: '\\bta\\.correlation(?=\\()'
      },
      {
        match: '\\bta\\.cross(?=\\()'
      },
      {
        match: '\\bta\\.crossover(?=\\()'
      },
      {
        match: '\\bta\\.crossunder(?=\\()'
      },
      {
        match: '\\bta\\.cum(?=\\()'
      },
      {
        match: '\\bta\\.dev(?=\\()'
      },
      {
        match: '\\bta\\.dmi(?=\\()'
      },
      {
        match: '\\bta\\.ema(?=\\()'
      },
      {
        match: '\\bta\\.falling(?=\\()'
      },
      {
        match: '\\bta\\.highest(?=\\()'
      },
      {
        match: '\\bta\\.highestbars(?=\\()'
      },
      {
        match: '\\bta\\.hma(?=\\()'
      },
      {
        match: '\\bta\\.kc(?=\\()'
      },
      {
        match: '\\bta\\.kcw(?=\\()'
      },
      {
        match: '\\bta\\.linreg(?=\\()'
      },
      {
        match: '\\bta\\.lowest(?=\\()'
      },
      {
        match: '\\bta\\.lowestbars(?=\\()'
      },
      {
        match: '\\bta\\.macd(?=\\()'
      },
      {
        match: '\\bta\\.median(?=\\()'
      },
      {
        match: '\\bta\\.mfi(?=\\()'
      },
      {
        match: '\\bta\\.mode(?=\\()'
      },
      {
        match: '\\bta\\.mom(?=\\()'
      },
      {
        match: '\\bta\\.percentile_linear_interpolation(?=\\()'
      },
      {
        match: '\\bta\\.percentile_nearest_rank(?=\\()'
      },
      {
        match: '\\bta\\.percentrank(?=\\()'
      },
      {
        match: '\\bta\\.pivothigh(?=\\()'
      },
      {
        match: '\\bta\\.pivotlow(?=\\()'
      },
      {
        match: '\\bta\\.range(?=\\()'
      },
      {
        match: '\\bta\\.rising(?=\\()'
      },
      {
        match: '\\bta\\.rma(?=\\()'
      },
      {
        match: '\\bta\\.roc(?=\\()'
      },
      {
        match: '\\bta\\.rsi(?=\\()'
      },
      {
        match: '\\bta\\.sar(?=\\()'
      },
      {
        match: '\\bta\\.sma(?=\\()'
      },
      {
        match: '\\bta\\.stdev(?=\\()'
      },
      {
        match: '\\bta\\.stoch(?=\\()'
      },
      {
        match: '\\bta\\.supertrend(?=\\()'
      },
      {
        match: '\\bta\\.swma(?=\\()'
      },
      {
        match: '\\bta\\.tr(?=\\()'
      },
      {
        match: '\\bta\\.tsi(?=\\()'
      },
      {
        match: '\\bta\\.valuewhen(?=\\()'
      },
      {
        match: '\\bta\\.variance(?=\\()'
      },
      {
        match: '\\bta\\.vwap(?=\\()'
      },
      {
        match: '\\bta\\.vwma(?=\\()'
      },
      {
        match: '\\bta\\.wma(?=\\()'
      },
      {
        match: '\\bta\\.wpr(?=\\()'
      },
      {
        match: '\\btable(?=\\()'
      },
      {
        match: '\\btable\\.cell(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_bgcolor(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_height(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_text(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_text_color(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_text_halign(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_text_size(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_text_valign(?=\\()'
      },
      {
        match: '\\btable\\.cell_set_width(?=\\()'
      },
      {
        match: '\\btable\\.clear(?=\\()'
      },
      {
        match: '\\btable\\.delete(?=\\()'
      },
      {
        match: '\\btable\\.new(?=\\()'
      },
      {
        match: '\\btable\\.set_bgcolor(?=\\()'
      },
      {
        match: '\\btable\\.set_border_color(?=\\()'
      },
      {
        match: '\\btable\\.set_border_width(?=\\()'
      },
      {
        match: '\\btable\\.set_frame_color(?=\\()'
      },
      {
        match: '\\btable\\.set_frame_width(?=\\()'
      },
      {
        match: '\\btable\\.set_position(?=\\()'
      },
      {
        match: '\\bticker\\.heikinashi(?=\\()'
      },
      {
        match: '\\bticker\\.kagi(?=\\()'
      },
      {
        match: '\\bticker\\.linebreak(?=\\()'
      },
      {
        match: '\\bticker\\.modify(?=\\()'
      },
      {
        match: '\\bticker\\.new(?=\\()'
      },
      {
        match: '\\bticker\\.pointfigure(?=\\()'
      },
      {
        match: '\\bticker\\.renko(?=\\()'
      },
      {
        match: '\\btime(?=\\()'
      },
      {
        match: '\\btime_close(?=\\()'
      },
      {
        match: '\\btimestamp(?=\\()'
      },
      {
        match: '\\bweekofyear(?=\\()'
      },
      {
        match: '\\byear(?=\\()'
      }
    ]
  };

  const BUILT_IN_VARIABLES = {
    className: 'deletion',
    variants: [
      {
        match: '\\badjustment\\.dividends\\b'
      },
      {
        match: '\\badjustment\\.none\\b'
      },
      {
        match: '\\badjustment\\.splits\\b'
      },
      {
        match: '\\balert\\.freq_all\\b'
      },
      {
        match: '\\balert\\.freq_once_per_bar\\b'
      },
      {
        match: '\\balert\\.freq_once_per_bar_close\\b'
      },
      {
        match: '\\bbar_index\\b'
      },
      {
        match: '\\bbarmerge\\.gaps_off\\b'
      },
      {
        match: '\\bbarmerge\\.gaps_on\\b'
      },
      {
        match: '\\bbarmerge\\.lookahead_off\\b'
      },
      {
        match: '\\bbarmerge\\.lookahead_on\\b'
      },
      {
        match: '\\bbarstate\\.isconfirmed\\b'
      },
      {
        match: '\\bbarstate\\.isfirst\\b'
      },
      {
        match: '\\bbarstate\\.ishistory\\b'
      },
      {
        match: '\\bbarstate\\.islast\\b'
      },
      {
        match: '\\bbarstate\\.islastconfirmedhistory\\b'
      },
      {
        match: '\\bbarstate\\.isnew\\b'
      },
      {
        match: '\\bbarstate\\.isrealtime\\b'
      },
      {
        match: '\\bbox\\.all\\b'
      },
      {
        match: '\\bclose\\b'
      },
      {
        match: '\\bcolor\\.aqua\\b'
      },
      {
        match: '\\bcolor\\.black\\b'
      },
      {
        match: '\\bcolor\\.blue\\b'
      },
      {
        match: '\\bcolor\\.fuchsia\\b'
      },
      {
        match: '\\bcolor\\.gray\\b'
      },
      {
        match: '\\bcolor\\.green\\b'
      },
      {
        match: '\\bcolor\\.lime\\b'
      },
      {
        match: '\\bcolor\\.maroon\\b'
      },
      {
        match: '\\bcolor\\.navy\\b'
      },
      {
        match: '\\bcolor\\.olive\\b'
      },
      {
        match: '\\bcolor\\.orange\\b'
      },
      {
        match: '\\bcolor\\.purple\\b'
      },
      {
        match: '\\bcolor\\.red\\b'
      },
      {
        match: '\\bcolor\\.silver\\b'
      },
      {
        match: '\\bcolor\\.teal\\b'
      },
      {
        match: '\\bcolor\\.white\\b'
      },
      {
        match: '\\bcolor\\.yellow\\b'
      },
      {
        match: '\\bcurrency\\.AUD\\b'
      },
      {
        match: '\\bcurrency\\.CAD\\b'
      },
      {
        match: '\\bcurrency\\.CHF\\b'
      },
      {
        match: '\\bcurrency\\.EUR\\b'
      },
      {
        match: '\\bcurrency\\.GBP\\b'
      },
      {
        match: '\\bcurrency\\.HKD\\b'
      },
      {
        match: '\\bcurrency\\.JPY\\b'
      },
      {
        match: '\\bcurrency\\.NOK\\b'
      },
      {
        match: '\\bcurrency\\.NONE\\b'
      },
      {
        match: '\\bcurrency\\.NZD\\b'
      },
      {
        match: '\\bcurrency\\.RUB\\b'
      },
      {
        match: '\\bcurrency\\.SEK\\b'
      },
      {
        match: '\\bcurrency\\.SGD\\b'
      },
      {
        match: '\\bcurrency\\.TRY\\b'
      },
      {
        match: '\\bcurrency\\.USD\\b'
      },
      {
        match: '\\bcurrency\\.ZAR\\b'
      },
      {
        match: '\\bdayofmonth\\b'
      },
      {
        match: '\\bdayofweek\\.friday\\b'
      },
      {
        match: '\\bdayofweek\\.monday\\b'
      },
      {
        match: '\\bdayofweek\\.saturday\\b'
      },
      {
        match: '\\bdayofweek\\.sunday\\b'
      },
      {
        match: '\\bdayofweek\\.thursday\\b'
      },
      {
        match: '\\bdayofweek\\.tuesday\\b'
      },
      {
        match: '\\bdayofweek\\.wednesday\\b'
      },
      {
        match: '\\bdayofweek\\b'
      },
      {
        match: '\\bdisplay\\.all\\b'
      },
      {
        match: '\\bdisplay\\.none\\b'
      },
      {
        match: '\\bdividends\\.gross\\b'
      },
      {
        match: '\\bdividends\\.net\\b'
      },
      {
        match: '\\bearnings\\.actual\\b'
      },
      {
        match: '\\bearnings\\.estimate\\b'
      },
      {
        match: '\\bearnings\\.standardized\\b'
      },
      {
        match: '\\bextend\\.both\\b'
      },
      {
        match: '\\bextend\\.left\\b'
      },
      {
        match: '\\bextend\\.none\\b'
      },
      {
        match: '\\bextend\\.right\\b'
      },
      {
        match: '\\bformat\\.inherit\\b'
      },
      {
        match: '\\bformat\\.mintick\\b'
      },
      {
        match: '\\bformat\\.percent\\b'
      },
      {
        match: '\\bformat\\.price\\b'
      },
      {
        match: '\\bformat\\.volume\\b'
      },
      {
        match: '\\bhigh\\b'
      },
      {
        match: '\\bhl2\\b'
      },
      {
        match: '\\bhlc3\\b'
      },
      {
        match: '\\bhline\\.style_dashed\\b'
      },
      {
        match: '\\bhline\\.style_dotted\\b'
      },
      {
        match: '\\bhline\\.style_solid\\b'
      },
      {
        match: '\\bhour\\b'
      },
      {
        match: '\\blabel\\.all\\b'
      },
      {
        match: '\\blabel\\.style_arrowdown\\b'
      },
      {
        match: '\\blabel\\.style_arrowup\\b'
      },
      {
        match: '\\blabel\\.style_circle\\b'
      },
      {
        match: '\\blabel\\.style_cross\\b'
      },
      {
        match: '\\blabel\\.style_diamond\\b'
      },
      {
        match: '\\blabel\\.style_flag\\b'
      },
      {
        match: '\\blabel\\.style_label_center\\b'
      },
      {
        match: '\\blabel\\.style_label_down\\b'
      },
      {
        match: '\\blabel\\.style_label_left\\b'
      },
      {
        match: '\\blabel\\.style_label_lower_left\\b'
      },
      {
        match: '\\blabel\\.style_label_lower_right\\b'
      },
      {
        match: '\\blabel\\.style_label_right\\b'
      },
      {
        match: '\\blabel\\.style_label_up\\b'
      },
      {
        match: '\\blabel\\.style_label_upper_left\\b'
      },
      {
        match: '\\blabel\\.style_label_upper_right\\b'
      },
      {
        match: '\\blabel\\.style_none\\b'
      },
      {
        match: '\\blabel\\.style_square\\b'
      },
      {
        match: '\\blabel\\.style_triangledown\\b'
      },
      {
        match: '\\blabel\\.style_triangleup\\b'
      },
      {
        match: '\\blabel\\.style_xcross\\b'
      },
      {
        match: '\\bline\\.all\\b'
      },
      {
        match: '\\bline\\.style_arrow_both\\b'
      },
      {
        match: '\\bline\\.style_arrow_left\\b'
      },
      {
        match: '\\bline\\.style_arrow_right\\b'
      },
      {
        match: '\\bline\\.style_dashed\\b'
      },
      {
        match: '\\bline\\.style_dotted\\b'
      },
      {
        match: '\\bline\\.style_solid\\b'
      },
      {
        match: '\\blocation\\.abovebar\\b'
      },
      {
        match: '\\blocation\\.absolute\\b'
      },
      {
        match: '\\blocation\\.belowbar\\b'
      },
      {
        match: '\\blocation\\.bottom\\b'
      },
      {
        match: '\\blocation\\.top\\b'
      },
      {
        match: '\\blow\\b'
      },
      {
        match: '\\bmath\\.e\\b'
      },
      {
        match: '\\bmath\\.phi\\b'
      },
      {
        match: '\\bmath\\.pi\\b'
      },
      {
        match: '\\bmath\\.rphi\\b'
      },
      {
        match: '\\bminute\\b'
      },
      {
        match: '\\bmonth\\b'
      },
      {
        match: '\\bna\\b'
      },
      {
        match: '\\bohlc4\\b'
      },
      {
        match: '\\bopen\\b'
      },
      {
        match: '\\border\\.ascending\\b'
      },
      {
        match: '\\border\\.descending\\b'
      },
      {
        match: '\\bplot\\.style_area\\b'
      },
      {
        match: '\\bplot\\.style_areabr\\b'
      },
      {
        match: '\\bplot\\.style_circles\\b'
      },
      {
        match: '\\bplot\\.style_columns\\b'
      },
      {
        match: '\\bplot\\.style_cross\\b'
      },
      {
        match: '\\bplot\\.style_histogram\\b'
      },
      {
        match: '\\bplot\\.style_line\\b'
      },
      {
        match: '\\bplot\\.style_linebr\\b'
      },
      {
        match: '\\bplot\\.style_stepline\\b'
      },
      {
        match: '\\bplot\\.style_stepline_diamond\\b'
      },
      {
        match: '\\bposition\\.bottom_center\\b'
      },
      {
        match: '\\bposition\\.bottom_left\\b'
      },
      {
        match: '\\bposition\\.bottom_right\\b'
      },
      {
        match: '\\bposition\\.middle_center\\b'
      },
      {
        match: '\\bposition\\.middle_left\\b'
      },
      {
        match: '\\bposition\\.middle_right\\b'
      },
      {
        match: '\\bposition\\.top_center\\b'
      },
      {
        match: '\\bposition\\.top_left\\b'
      },
      {
        match: '\\bposition\\.top_right\\b'
      },
      {
        match: '\\bscale\\.left\\b'
      },
      {
        match: '\\bscale\\.none\\b'
      },
      {
        match: '\\bscale\\.right\\b'
      },
      {
        match: '\\bsecond\\b'
      },
      {
        match: '\\bsession\\.extended\\b'
      },
      {
        match: '\\bsession\\.ismarket\\b'
      },
      {
        match: '\\bsession\\.ispostmarket\\b'
      },
      {
        match: '\\bsession\\.ispremarket\\b'
      },
      {
        match: '\\bsession\\.regular\\b'
      },
      {
        match: '\\bshape\\.arrowdown\\b'
      },
      {
        match: '\\bshape\\.arrowup\\b'
      },
      {
        match: '\\bshape\\.circle\\b'
      },
      {
        match: '\\bshape\\.cross\\b'
      },
      {
        match: '\\bshape\\.diamond\\b'
      },
      {
        match: '\\bshape\\.flag\\b'
      },
      {
        match: '\\bshape\\.labeldown\\b'
      },
      {
        match: '\\bshape\\.labelup\\b'
      },
      {
        match: '\\bshape\\.square\\b'
      },
      {
        match: '\\bshape\\.triangledown\\b'
      },
      {
        match: '\\bshape\\.triangleup\\b'
      },
      {
        match: '\\bshape\\.xcross\\b'
      },
      {
        match: '\\bsize\\.auto\\b'
      },
      {
        match: '\\bsize\\.huge\\b'
      },
      {
        match: '\\bsize\\.large\\b'
      },
      {
        match: '\\bsize\\.normal\\b'
      },
      {
        match: '\\bsize\\.small\\b'
      },
      {
        match: '\\bsize\\.tiny\\b'
      },
      {
        match: '\\bsplits\\.denominator\\b'
      },
      {
        match: '\\bsplits\\.numerator\\b'
      },
      {
        match: '\\bstrategy\\.account_currency\\b'
      },
      {
        match: '\\bstrategy\\.cash\\b'
      },
      {
        match: '\\bstrategy\\.closedtrades\\b'
      },
      {
        match: '\\bstrategy\\.commission\\.cash_per_contract\\b'
      },
      {
        match: '\\bstrategy\\.commission\\.cash_per_order\\b'
      },
      {
        match: '\\bstrategy\\.commission\\.percent\\b'
      },
      {
        match: '\\bstrategy\\.direction\\.all\\b'
      },
      {
        match: '\\bstrategy\\.direction\\.long\\b'
      },
      {
        match: '\\bstrategy\\.direction\\.short\\b'
      },
      {
        match: '\\bstrategy\\.equity\\b'
      },
      {
        match: '\\bstrategy\\.eventrades\\b'
      },
      {
        match: '\\bstrategy\\.fixed\\b'
      },
      {
        match: '\\bstrategy\\.grossloss\\b'
      },
      {
        match: '\\bstrategy\\.grossprofit\\b'
      },
      {
        match: '\\bstrategy\\.initial_capital\\b'
      },
      {
        match: '\\bstrategy\\.long\\b'
      },
      {
        match: '\\bstrategy\\.losstrades\\b'
      },
      {
        match: '\\bstrategy\\.max_contracts_held_all\\b'
      },
      {
        match: '\\bstrategy\\.max_contracts_held_long\\b'
      },
      {
        match: '\\bstrategy\\.max_contracts_held_short\\b'
      },
      {
        match: '\\bstrategy\\.max_drawdown\\b'
      },
      {
        match: '\\bstrategy\\.netprofit\\b'
      },
      {
        match: '\\bstrategy\\.oca\\.cancel\\b'
      },
      {
        match: '\\bstrategy\\.oca\\.none\\b'
      },
      {
        match: '\\bstrategy\\.oca\\.reduce\\b'
      },
      {
        match: '\\bstrategy\\.openprofit\\b'
      },
      {
        match: '\\bstrategy\\.opentrades\\b'
      },
      {
        match: '\\bstrategy\\.percent_of_equity\\b'
      },
      {
        match: '\\bstrategy\\.position_avg_price\\b'
      },
      {
        match: '\\bstrategy\\.position_entry_name\\b'
      },
      {
        match: '\\bstrategy\\.position_size\\b'
      },
      {
        match: '\\bstrategy\\.short\\b'
      },
      {
        match: '\\bstrategy\\.wintrades\\b'
      },
      {
        match: '\\bsyminfo\\.basecurrency\\b'
      },
      {
        match: '\\bsyminfo\\.currency\\b'
      },
      {
        match: '\\bsyminfo\\.description\\b'
      },
      {
        match: '\\bsyminfo\\.mintick\\b'
      },
      {
        match: '\\bsyminfo\\.pointvalue\\b'
      },
      {
        match: '\\bsyminfo\\.prefix\\b'
      },
      {
        match: '\\bsyminfo\\.root\\b'
      },
      {
        match: '\\bsyminfo\\.session\\b'
      },
      {
        match: '\\bsyminfo\\.ticker\\b'
      },
      {
        match: '\\bsyminfo\\.tickerid\\b'
      },
      {
        match: '\\bsyminfo\\.timezone\\b'
      },
      {
        match: '\\bsyminfo\\.type\\b'
      },
      {
        match: '\\bta\\.accdist\\b'
      },
      {
        match: '\\bta\\.iii\\b'
      },
      {
        match: '\\bta\\.nvi\\b'
      },
      {
        match: '\\bta\\.obv\\b'
      },
      {
        match: '\\bta\\.pvi\\b'
      },
      {
        match: '\\bta\\.pvt\\b'
      },
      {
        match: '\\bta\\.tr\\b'
      },
      {
        match: '\\bta\\.vwap\\b'
      },
      {
        match: '\\bta\\.wad\\b'
      },
      {
        match: '\\bta\\.wvad\\b'
      },
      {
        match: '\\btable\\.all\\b'
      },
      {
        match: '\\btext\\.align_bottom\\b'
      },
      {
        match: '\\btext\\.align_center\\b'
      },
      {
        match: '\\btext\\.align_left\\b'
      },
      {
        match: '\\btext\\.align_right\\b'
      },
      {
        match: '\\btext\\.align_top\\b'
      },
      {
        match: '\\btime\\b'
      },
      {
        match: '\\btime_close\\b'
      },
      {
        match: '\\btime_tradingday\\b'
      },
      {
        match: '\\btimeframe\\.isdaily\\b'
      },
      {
        match: '\\btimeframe\\.isdwm\\b'
      },
      {
        match: '\\btimeframe\\.isintraday\\b'
      },
      {
        match: '\\btimeframe\\.isminutes\\b'
      },
      {
        match: '\\btimeframe\\.ismonthly\\b'
      },
      {
        match: '\\btimeframe\\.isseconds\\b'
      },
      {
        match: '\\btimeframe\\.isweekly\\b'
      },
      {
        match: '\\btimeframe\\.multiplier\\b'
      },
      {
        match: '\\btimeframe\\.period\\b'
      },
      {
        match: '\\btimenow\\b'
      },
      {
        match: '\\bvolume\\b'
      },
      {
        match: '\\bweekofyear\\b'
      },
      {
        match: '\\bxloc\\.bar_index\\b'
      },
      {
        match: '\\bxloc\\.bar_time\\b'
      },
      {
        match: '\\byear\\b'
      },
      {
        match: '\\byloc\\.abovebar\\b'
      },
      {
        match: '\\byloc\\.belowbar\\b'
      },
      {
        match: '\\byloc\\.price\\b'
      }

    ]
  };
  const KEYWORDS = [
    'if',
    'and',
    'export',
    'else',
    'for',
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
    'color',
    'int',
    'float',
    'string',
    'array',
    'label',
    'color'

  ];

  const KEYWORD_ERR = {
    className: '',
    variants: [
      // To avoid highlighting 'Keywords' alone before =
      {
        match: '(if|and|export|else|for|if|import|not|or|series|simple|switch|var|varip|while|bool|color|int|float|string|array|label|color)\\s*(?=\\=)'
      }
    ]
  };

  const LITERALS = [
    "true",
    "false"
  ];

  return {
    name: 'pine',
    aliases: [
      'pine',
      'pinescript'
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
      KEYWORD_ERR,
      {
        className: '',
        begin: '\\[A-Za-z0-9_]+'
      },
      {
        className: 'number',
        begin: '\\[0-9]+'
      },
      {
        className: '',
        match: '\\[A-Za-z0-9_](?=\\()'
      },
      {
        className: '',
        match: '\\#\\b\\d+\\b'
      },
      {
        className: 'number',
        match: '\\b\\d+\\b'
      },
      {
        className: 'symbol',
        match: '='
      }
    ]
  };
}