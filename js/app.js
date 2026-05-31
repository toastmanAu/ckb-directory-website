/**
 * CKB Directory Website
 * Single-page app with hash routing, voting, and submission handling.
 */

/* ============================================================
   CONFIG
   ============================================================ */

const CONFIG = {
  panelGroups: [
  {
    'id': 'byterent',
    'name': 'Byterent',
    'panels': [
      {
        'id': 'byterent_01',
        'name': 'Byterent 1',
        'file': 'assets/byterent_01.png',
        'description': 'Design concept 1 for Byterent'
      },
      {
        'id': 'byterent_02',
        'name': 'Byterent 2',
        'file': 'assets/byterent_02.png',
        'description': 'Design concept 2 for Byterent'
      },
      {
        'id': 'byterent_03',
        'name': 'Byterent 3',
        'file': 'assets/byterent_03.png',
        'description': 'Design concept 3 for Byterent'
      }
    ]
  },
  {
    'id': 'cellswap',
    'name': 'CellSwap',
    'panels': [
      {
        'id': 'cellswap_01',
        'name': 'CellSwap 1',
        'file': 'assets/cellswap_01.png',
        'description': 'Design concept 1 for CellSwap'
      }
    ]
  },
  {
    'id': 'ckb_explorer',
    'name': 'CKB Explorer',
    'panels': [
      {
        'id': 'ckb_explorer_01',
        'name': 'CKB Explorer 1',
        'file': 'assets/ckb_explorer_01.png',
        'description': 'Design concept 1 for CKB Explorer'
      },
      {
        'id': 'ckb_explorer_02',
        'name': 'CKB Explorer 2',
        'file': 'assets/ckb_explorer_02.png',
        'description': 'Design concept 2 for CKB Explorer'
      },
      {
        'id': 'ckb_explorer_03',
        'name': 'CKB Explorer 3',
        'file': 'assets/ckb_explorer_03.png',
        'description': 'Design concept 3 for CKB Explorer'
      },
      {
        'id': 'ckb_explorer_04',
        'name': 'CKB Explorer 4',
        'file': 'assets/ckb_explorer_04.png',
        'description': 'Design concept 4 for CKB Explorer'
      }
    ]
  },
  {
    'id': 'ckb_rpc_console',
    'name': 'CKB RPC Console',
    'panels': [
      {
        'id': 'ckb_rpc_console_01',
        'name': 'CKB RPC Console 1',
        'file': 'assets/ckb_rpc_console_01.png',
        'description': 'Design concept 1 for CKB RPC Console'
      },
      {
        'id': 'ckb_rpc_console_02',
        'name': 'CKB RPC Console 2',
        'file': 'assets/ckb_rpc_console_02.png',
        'description': 'Design concept 2 for CKB RPC Console'
      },
      {
        'id': 'ckb_rpc_console_03',
        'name': 'CKB RPC Console 3',
        'file': 'assets/ckb_rpc_console_03.png',
        'description': 'Design concept 3 for CKB RPC Console'
      },
      {
        'id': 'ckb_rpc_console_04',
        'name': 'CKB RPC Console 4',
        'file': 'assets/ckb_rpc_console_04.png',
        'description': 'Design concept 4 for CKB RPC Console'
      }
    ]
  },
  {
    'id': 'ckba',
    'name': 'CKBA',
    'panels': [
      {
        'id': 'ckba_01',
        'name': 'CKBA 1',
        'file': 'assets/ckba_01.png',
        'description': 'Design concept 1 for CKBA'
      },
      {
        'id': 'ckba_02',
        'name': 'CKBA 2',
        'file': 'assets/ckba_02.png',
        'description': 'Design concept 2 for CKBA'
      }
    ]
  },
  {
    'id': 'ckboost',
    'name': 'CKBoost',
    'panels': [
      {
        'id': 'ckboost_01',
        'name': 'CKBoost 1',
        'file': 'assets/ckboost_01.png',
        'description': 'Design concept 1 for CKBoost'
      },
      {
        'id': 'ckboost_02',
        'name': 'CKBoost 2',
        'file': 'assets/ckboost_02.png',
        'description': 'Design concept 2 for CKBoost'
      },
      {
        'id': 'ckboost_03',
        'name': 'CKBoost 3',
        'file': 'assets/ckboost_03.png',
        'description': 'Design concept 3 for CKBoost'
      },
      {
        'id': 'ckboost_04',
        'name': 'CKBoost 4',
        'file': 'assets/ckboost_04.png',
        'description': 'Design concept 4 for CKBoost'
      },
      {
        'id': 'ckboost_05',
        'name': 'CKBoost 5',
        'file': 'assets/ckboost_05.png',
        'description': 'Design concept 5 for CKBoost'
      },
      {
        'id': 'ckboost_06',
        'name': 'CKBoost 6',
        'file': 'assets/ckboost_06.png',
        'description': 'Design concept 6 for CKBoost'
      },
      {
        'id': 'ckboost_07',
        'name': 'CKBoost 7',
        'file': 'assets/ckboost_07.png',
        'description': 'Design concept 7 for CKBoost'
      }
    ]
  },
  {
    'id': 'cklibrary',
    'name': 'CKLibrary',
    'panels': [
      {
        'id': 'cklibrary_01',
        'name': 'CKLibrary 1',
        'file': 'assets/cklibrary_01.png',
        'description': 'Design concept 1 for CKLibrary'
      },
      {
        'id': 'cklibrary_02',
        'name': 'CKLibrary 2',
        'file': 'assets/cklibrary_02.png',
        'description': 'Design concept 2 for CKLibrary'
      },
      {
        'id': 'cklibrary_03',
        'name': 'CKLibrary 3',
        'file': 'assets/cklibrary_03.png',
        'description': 'Design concept 3 for CKLibrary'
      },
      {
        'id': 'cklibrary_04',
        'name': 'CKLibrary 4',
        'file': 'assets/cklibrary_04.png',
        'description': 'Design concept 4 for CKLibrary'
      },
      {
        'id': 'cklibrary_05',
        'name': 'CKLibrary 5',
        'file': 'assets/cklibrary_05.png',
        'description': 'Design concept 5 for CKLibrary'
      },
      {
        'id': 'cklibrary_06',
        'name': 'CKLibrary 6',
        'file': 'assets/cklibrary_06.png',
        'description': 'Design concept 6 for CKLibrary'
      }
    ]
  },
  {
    'id': 'dao_portfolio_tracker',
    'name': 'DAO Portfolio Tracker',
    'panels': [
      {
        'id': 'dao_portfolio_tracker_01',
        'name': 'DAO Portfolio Tracker 1',
        'file': 'assets/dao_portfolio_tracker_01.png',
        'description': 'Design concept 1 for DAO Portfolio Tracker'
      }
    ]
  },
  {
    'id': 'fiber',
    'name': 'Fiber',
    'panels': [
      {
        'id': 'fiber_01',
        'name': 'Fiber 1',
        'file': 'assets/fiber_01.png',
        'description': 'Design concept 1 for Fiber'
      },
      {
        'id': 'fiber_02',
        'name': 'Fiber 2',
        'file': 'assets/fiber_02.png',
        'description': 'Design concept 2 for Fiber'
      },
      {
        'id': 'fiber_03',
        'name': 'Fiber 3',
        'file': 'assets/fiber_03.png',
        'description': 'Design concept 3 for Fiber'
      },
      {
        'id': 'fiber_04',
        'name': 'Fiber 4',
        'file': 'assets/fiber_04.png',
        'description': 'Design concept 4 for Fiber'
      },
      {
        'id': 'fiber_05',
        'name': 'Fiber 5',
        'file': 'assets/fiber_05.png',
        'description': 'Design concept 5 for Fiber'
      },
      {
        'id': 'fiber_06',
        'name': 'Fiber 6',
        'file': 'assets/fiber_06.png',
        'description': 'Design concept 6 for Fiber'
      },
      {
        'id': 'fiber_07',
        'name': 'Fiber 7',
        'file': 'assets/fiber_07.png',
        'description': 'Design concept 7 for Fiber'
      },
      {
        'id': 'fiber_08',
        'name': 'Fiber 8',
        'file': 'assets/fiber_08.png',
        'description': 'Design concept 8 for Fiber'
      }
    ]
  },
  {
    'id': 'holdem_bulls',
    'name': 'Holdem Bulls',
    'panels': [
      {
        'id': 'holdem_bulls_01',
        'name': 'Holdem Bulls 1',
        'file': 'assets/holdem_bulls_01.png',
        'description': 'Design concept 1 for Holdem Bulls'
      },
      {
        'id': 'holdem_bulls_02',
        'name': 'Holdem Bulls 2',
        'file': 'assets/holdem_bulls_02.png',
        'description': 'Design concept 2 for Holdem Bulls'
      },
      {
        'id': 'holdem_bulls_03',
        'name': 'Holdem Bulls 3',
        'file': 'assets/holdem_bulls_03.png',
        'description': 'Design concept 3 for Holdem Bulls'
      },
      {
        'id': 'holdem_bulls_04',
        'name': 'Holdem Bulls 4',
        'file': 'assets/holdem_bulls_04.png',
        'description': 'Design concept 4 for Holdem Bulls'
      },
      {
        'id': 'holdem_bulls_05',
        'name': 'Holdem Bulls 5',
        'file': 'assets/holdem_bulls_05.png',
        'description': 'Design concept 5 for Holdem Bulls'
      },
      {
        'id': 'holdem_bulls_06',
        'name': 'Holdem Bulls 6',
        'file': 'assets/holdem_bulls_06.png',
        'description': 'Design concept 6 for Holdem Bulls'
      }
    ]
  },
  {
    'id': 'ickb',
    'name': 'iCKB',
    'panels': [
      {
        'id': 'ickb_01',
        'name': 'iCKB 1',
        'file': 'assets/ickb_01.png',
        'description': 'Design concept 1 for iCKB'
      },
      {
        'id': 'ickb_02',
        'name': 'iCKB 2',
        'file': 'assets/ickb_02.png',
        'description': 'Design concept 2 for iCKB'
      },
      {
        'id': 'ickb_03',
        'name': 'iCKB 3',
        'file': 'assets/ickb_03.png',
        'description': 'Design concept 3 for iCKB'
      },
      {
        'id': 'ickb_04',
        'name': 'iCKB 4',
        'file': 'assets/ickb_04.png',
        'description': 'Design concept 4 for iCKB'
      },
      {
        'id': 'ickb_05',
        'name': 'iCKB 5',
        'file': 'assets/ickb_05.png',
        'description': 'Design concept 5 for iCKB'
      },
      {
        'id': 'ickb_06',
        'name': 'iCKB 6',
        'file': 'assets/ickb_06.png',
        'description': 'Design concept 6 for iCKB'
      }
    ]
  },
  {
    'id': 'joy_id',
    'name': 'JoyID',
    'panels': [
      {
        'id': 'joy_id_01',
        'name': 'JoyID 1',
        'file': 'assets/joy_id_01.png',
        'description': 'Design concept 1 for JoyID'
      },
      {
        'id': 'joy_id_02',
        'name': 'JoyID 2',
        'file': 'assets/joy_id_02.png',
        'description': 'Design concept 2 for JoyID'
      },
      {
        'id': 'joy_id_03',
        'name': 'JoyID 3',
        'file': 'assets/joy_id_03.png',
        'description': 'Design concept 3 for JoyID'
      },
      {
        'id': 'joy_id_04',
        'name': 'JoyID 4',
        'file': 'assets/joy_id_04.png',
        'description': 'Design concept 4 for JoyID'
      },
      {
        'id': 'joy_id_05',
        'name': 'JoyID 5',
        'file': 'assets/joy_id_05.png',
        'description': 'Design concept 5 for JoyID'
      },
      {
        'id': 'joy_id_06',
        'name': 'JoyID 6',
        'file': 'assets/joy_id_06.png',
        'description': 'Design concept 6 for JoyID'
      },
      {
        'id': 'joy_id_07',
        'name': 'JoyID 7',
        'file': 'assets/joy_id_07.png',
        'description': 'Design concept 7 for JoyID'
      },
      {
        'id': 'joy_id_08',
        'name': 'JoyID 8',
        'file': 'assets/joy_id_08.png',
        'description': 'Design concept 8 for JoyID'
      },
      {
        'id': 'joy_id_09',
        'name': 'JoyID 9',
        'file': 'assets/joy_id_09.png',
        'description': 'Design concept 9 for JoyID'
      }
    ]
  },
  {
    'id': 'mobit',
    'name': 'Mobit',
    'panels': [
      {
        'id': 'mobit_01',
        'name': 'Mobit 1',
        'file': 'assets/mobit_01.png',
        'description': 'Design concept 1 for Mobit'
      },
      {
        'id': 'mobit_02',
        'name': 'Mobit 2',
        'file': 'assets/mobit_02.png',
        'description': 'Design concept 2 for Mobit'
      },
      {
        'id': 'mobit_03',
        'name': 'Mobit 3',
        'file': 'assets/mobit_03.png',
        'description': 'Design concept 3 for Mobit'
      },
      {
        'id': 'mobit_04',
        'name': 'Mobit 4',
        'file': 'assets/mobit_04.png',
        'description': 'Design concept 4 for Mobit'
      },
      {
        'id': 'mobit_05',
        'name': 'Mobit 5',
        'file': 'assets/mobit_05.png',
        'description': 'Design concept 5 for Mobit'
      },
      {
        'id': 'mobit_06',
        'name': 'Mobit 6',
        'file': 'assets/mobit_06.png',
        'description': 'Design concept 6 for Mobit'
      },
      {
        'id': 'mobit_07',
        'name': 'Mobit 7',
        'file': 'assets/mobit_07.png',
        'description': 'Design concept 7 for Mobit'
      },
      {
        'id': 'mobit_08',
        'name': 'Mobit 8',
        'file': 'assets/mobit_08.png',
        'description': 'Design concept 8 for Mobit'
      }
    ]
  },
  {
    'id': 'nervos',
    'name': 'Nervos',
    'panels': [
      {
        'id': 'nervos_01',
        'name': 'Nervos 1',
        'file': 'assets/nervos_01.png',
        'description': 'Design concept 1 for Nervos'
      },
      {
        'id': 'nervos_02',
        'name': 'Nervos 2',
        'file': 'assets/nervos_02.png',
        'description': 'Design concept 2 for Nervos'
      },
      {
        'id': 'nervos_03',
        'name': 'Nervos 3',
        'file': 'assets/nervos_03.png',
        'description': 'Design concept 3 for Nervos'
      },
      {
        'id': 'nervos_04',
        'name': 'Nervos 4',
        'file': 'assets/nervos_04.png',
        'description': 'Design concept 4 for Nervos'
      }
    ]
  },
  {
    'id': 'nervos_dao_view',
    'name': 'Nervos DAO View',
    'panels': [
      {
        'id': 'nervos_dao_view_05',
        'name': 'Nervos DAO View 5',
        'file': 'assets/nervos_dao_view_05.png',
        'description': 'Design concept 5 for Nervos DAO View'
      }
    ]
  },
  {
    'id': 'nervos_dao_viewer',
    'name': 'Nervos DAO Viewer',
    'panels': [
      {
        'id': 'nervos_dao_viewer_01',
        'name': 'Nervos DAO Viewer 1',
        'file': 'assets/nervos_dao_viewer_01.png',
        'description': 'Design concept 1 for Nervos DAO Viewer'
      },
      {
        'id': 'nervos_dao_viewer_02',
        'name': 'Nervos DAO Viewer 2',
        'file': 'assets/nervos_dao_viewer_02.png',
        'description': 'Design concept 2 for Nervos DAO Viewer'
      },
      {
        'id': 'nervos_dao_viewer_03',
        'name': 'Nervos DAO Viewer 3',
        'file': 'assets/nervos_dao_viewer_03.png',
        'description': 'Design concept 3 for Nervos DAO Viewer'
      },
      {
        'id': 'nervos_dao_viewer_04',
        'name': 'Nervos DAO Viewer 4',
        'file': 'assets/nervos_dao_viewer_04.png',
        'description': 'Design concept 4 for Nervos DAO Viewer'
      },
      {
        'id': 'nervos_dao_viewer_05',
        'name': 'Nervos DAO Viewer 5',
        'file': 'assets/nervos_dao_viewer_05.png',
        'description': 'Design concept 5 for Nervos DAO Viewer'
      }
    ]
  },
  {
    'id': 'perun',
    'name': 'Perun',
    'panels': [
      {
        'id': 'perun_01',
        'name': 'Perun 1',
        'file': 'assets/perun_01.png',
        'description': 'Design concept 1 for Perun'
      },
      {
        'id': 'perun_02',
        'name': 'Perun 2',
        'file': 'assets/perun_02.png',
        'description': 'Design concept 2 for Perun'
      },
      {
        'id': 'perun_03',
        'name': 'Perun 3',
        'file': 'assets/perun_03.png',
        'description': 'Design concept 3 for Perun'
      },
      {
        'id': 'perun_04',
        'name': 'Perun 4',
        'file': 'assets/perun_04.png',
        'description': 'Design concept 4 for Perun'
      },
      {
        'id': 'perun_05',
        'name': 'Perun 5',
        'file': 'assets/perun_05.png',
        'description': 'Design concept 5 for Perun'
      },
      {
        'id': 'perun_06',
        'name': 'Perun 6',
        'file': 'assets/perun_06.png',
        'description': 'Design concept 6 for Perun'
      },
      {
        'id': 'perun_07',
        'name': 'Perun 7',
        'file': 'assets/perun_07.png',
        'description': 'Design concept 7 for Perun'
      }
    ]
  },
  {
    'id': 'pocket_node',
    'name': 'Pocket Node',
    'panels': [
      {
        'id': 'pocket_node_01',
        'name': 'Pocket Node 1',
        'file': 'assets/pocket_node_01.png',
        'description': 'Design concept 1 for Pocket Node'
      },
      {
        'id': 'pocket_node_02',
        'name': 'Pocket Node 2',
        'file': 'assets/pocket_node_02.png',
        'description': 'Design concept 2 for Pocket Node'
      },
      {
        'id': 'pocket_node_03',
        'name': 'Pocket Node 3',
        'file': 'assets/pocket_node_03.png',
        'description': 'Design concept 3 for Pocket Node'
      },
      {
        'id': 'pocket_node_04',
        'name': 'Pocket Node 4',
        'file': 'assets/pocket_node_04.png',
        'description': 'Design concept 4 for Pocket Node'
      },
      {
        'id': 'pocket_node_05',
        'name': 'Pocket Node 5',
        'file': 'assets/pocket_node_05.png',
        'description': 'Design concept 5 for Pocket Node'
      },
      {
        'id': 'pocket_node_06',
        'name': 'Pocket Node 6',
        'file': 'assets/pocket_node_06.png',
        'description': 'Design concept 6 for Pocket Node'
      },
      {
        'id': 'pocket_node_07',
        'name': 'Pocket Node 7',
        'file': 'assets/pocket_node_07.png',
        'description': 'Design concept 7 for Pocket Node'
      },
      {
        'id': 'pocket_node_08',
        'name': 'Pocket Node 8',
        'file': 'assets/pocket_node_08.png',
        'description': 'Design concept 8 for Pocket Node'
      },
      {
        'id': 'pocket_node_09',
        'name': 'Pocket Node 9',
        'file': 'assets/pocket_node_09.png',
        'description': 'Design concept 9 for Pocket Node'
      }
    ]
  },
  {
    'id': 'quantum_purse',
    'name': 'Quantum Purse',
    'panels': [
      {
        'id': 'quantum_purse_01',
        'name': 'Quantum Purse 1',
        'file': 'assets/quantum_purse_01.png',
        'description': 'Design concept 1 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_02',
        'name': 'Quantum Purse 2',
        'file': 'assets/quantum_purse_02.png',
        'description': 'Design concept 2 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_03',
        'name': 'Quantum Purse 3',
        'file': 'assets/quantum_purse_03.png',
        'description': 'Design concept 3 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_04',
        'name': 'Quantum Purse 4',
        'file': 'assets/quantum_purse_04.png',
        'description': 'Design concept 4 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_05',
        'name': 'Quantum Purse 5',
        'file': 'assets/quantum_purse_05.png',
        'description': 'Design concept 5 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_06',
        'name': 'Quantum Purse 6',
        'file': 'assets/quantum_purse_06.png',
        'description': 'Design concept 6 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_07',
        'name': 'Quantum Purse 7',
        'file': 'assets/quantum_purse_07.png',
        'description': 'Design concept 7 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_08',
        'name': 'Quantum Purse 8',
        'file': 'assets/quantum_purse_08.png',
        'description': 'Design concept 8 for Quantum Purse'
      },
      {
        'id': 'quantum_purse_09',
        'name': 'Quantum Purse 9',
        'file': 'assets/quantum_purse_09.png',
        'description': 'Design concept 9 for Quantum Purse'
      }
    ]
  },
  {
    'id': 'rfc_view',
    'name': 'RFC View',
    'panels': [
      {
        'id': 'rfc_view_01',
        'name': 'RFC View 1',
        'file': 'assets/rfc_view_01.png',
        'description': 'Design concept 1 for RFC View'
      },
      {
        'id': 'rfc_view_02',
        'name': 'RFC View 2',
        'file': 'assets/rfc_view_02.png',
        'description': 'Design concept 2 for RFC View'
      },
      {
        'id': 'rfc_view_03',
        'name': 'RFC View 3',
        'file': 'assets/rfc_view_03.png',
        'description': 'Design concept 3 for RFC View'
      }
    ]
  },
  {
    'id': 'rosen',
    'name': 'Rosen',
    'panels': [
      {
        'id': 'rosen_01',
        'name': 'Rosen 1',
        'file': 'assets/rosen_01.png',
        'description': 'Design concept 1 for Rosen'
      },
      {
        'id': 'rosen_02',
        'name': 'Rosen 2',
        'file': 'assets/rosen_02.png',
        'description': 'Design concept 2 for Rosen'
      },
      {
        'id': 'rosen_03',
        'name': 'Rosen 3',
        'file': 'assets/rosen_03.png',
        'description': 'Design concept 3 for Rosen'
      },
      {
        'id': 'rosen_04',
        'name': 'Rosen 4',
        'file': 'assets/rosen_04.png',
        'description': 'Design concept 4 for Rosen'
      },
      {
        'id': 'rosen_05',
        'name': 'Rosen 5',
        'file': 'assets/rosen_05.png',
        'description': 'Design concept 5 for Rosen'
      }
    ]
  },
  {
    'id': 'scryve',
    'name': 'Scryve',
    'panels': [
      {
        'id': 'scryve_01',
        'name': 'Scryve 1',
        'file': 'assets/scryve_01.png',
        'description': 'Design concept 1 for Scryve'
      },
      {
        'id': 'scryve_02',
        'name': 'Scryve 2',
        'file': 'assets/scryve_02.png',
        'description': 'Design concept 2 for Scryve'
      },
      {
        'id': 'scryve_03',
        'name': 'Scryve 3',
        'file': 'assets/scryve_03.png',
        'description': 'Design concept 3 for Scryve'
      },
      {
        'id': 'scryve_04',
        'name': 'Scryve 4',
        'file': 'assets/scryve_04.png',
        'description': 'Design concept 4 for Scryve'
      },
      {
        'id': 'scryve_05',
        'name': 'Scryve 5',
        'file': 'assets/scryve_05.png',
        'description': 'Design concept 5 for Scryve'
      },
      {
        'id': 'scryve_06',
        'name': 'Scryve 6',
        'file': 'assets/scryve_06.png',
        'description': 'Design concept 6 for Scryve'
      },
      {
        'id': 'scryve_07',
        'name': 'Scryve 7',
        'file': 'assets/scryve_07.png',
        'description': 'Design concept 7 for Scryve'
      }
    ]
  },
  {
    'id': 'talk_forum',
    'name': 'Talk Forum',
    'panels': [
      {
        'id': 'talk_forum_01',
        'name': 'Talk Forum 1',
        'file': 'assets/talk_forum_01.png',
        'description': 'Design concept 1 for Talk Forum'
      },
      {
        'id': 'talk_forum_02',
        'name': 'Talk Forum 2',
        'file': 'assets/talk_forum_02.png',
        'description': 'Design concept 2 for Talk Forum'
      },
      {
        'id': 'talk_forum_03',
        'name': 'Talk Forum 3',
        'file': 'assets/talk_forum_03.png',
        'description': 'Design concept 3 for Talk Forum'
      },
      {
        'id': 'talk_forum_04',
        'name': 'Talk Forum 4',
        'file': 'assets/talk_forum_04.png',
        'description': 'Design concept 4 for Talk Forum'
      },
      {
        'id': 'talk_forum_05',
        'name': 'Talk Forum 5',
        'file': 'assets/talk_forum_05.png',
        'description': 'Design concept 5 for Talk Forum'
      }
    ]
  },
  {
    'id': 'testnet_faucet',
    'name': 'Testnet Faucet',
    'panels': [
      {
        'id': 'testnet_faucet_01',
        'name': 'Testnet Faucet 1',
        'file': 'assets/testnet_faucet_01.png',
        'description': 'Design concept 1 for Testnet Faucet'
      },
      {
        'id': 'testnet_faucet_02',
        'name': 'Testnet Faucet 2',
        'file': 'assets/testnet_faucet_02.png',
        'description': 'Design concept 2 for Testnet Faucet'
      },
      {
        'id': 'testnet_faucet_03',
        'name': 'Testnet Faucet 3',
        'file': 'assets/testnet_faucet_03.png',
        'description': 'Design concept 3 for Testnet Faucet'
      },
      {
        'id': 'testnet_faucet_04',
        'name': 'Testnet Faucet 4',
        'file': 'assets/testnet_faucet_04.png',
        'description': 'Design concept 4 for Testnet Faucet'
      },
      {
        'id': 'testnet_faucet_05',
        'name': 'Testnet Faucet 5',
        'file': 'assets/testnet_faucet_05.png',
        'description': 'Design concept 5 for Testnet Faucet'
      }
    ]
  },
  {
    'id': 'tx_dao_yield',
    'name': 'TX DAO Yield',
    'panels': [
      {
        'id': 'tx_dao_yield_01',
        'name': 'TX DAO Yield 1',
        'file': 'assets/tx_dao_yield_01.png',
        'description': 'Design concept 1 for TX DAO Yield'
      },
      {
        'id': 'tx_dao_yield_02',
        'name': 'TX DAO Yield 2',
        'file': 'assets/tx_dao_yield_02.png',
        'description': 'Design concept 2 for TX DAO Yield'
      },
      {
        'id': 'tx_dao_yield_03',
        'name': 'TX DAO Yield 3',
        'file': 'assets/tx_dao_yield_03.png',
        'description': 'Design concept 3 for TX DAO Yield'
      },
      {
        'id': 'tx_dao_yield_04',
        'name': 'TX DAO Yield 4',
        'file': 'assets/tx_dao_yield_04.png',
        'description': 'Design concept 4 for TX DAO Yield'
      }
    ]
  },
  {
    'id': 'wyltek_industries',
    'name': 'Wyltek Industries',
    'panels': [
      {
        'id': 'wyltek_industries_01',
        'name': 'Wyltek Industries 1',
        'file': 'assets/wyltek_industries_01.png',
        'description': 'Design concept 1 for Wyltek Industries'
      },
      {
        'id': 'wyltek_industries_02',
        'name': 'Wyltek Industries 2',
        'file': 'assets/wyltek_industries_02.png',
        'description': 'Design concept 2 for Wyltek Industries'
      },
      {
        'id': 'wyltek_industries_03',
        'name': 'Wyltek Industries 3',
        'file': 'assets/wyltek_industries_03.png',
        'description': 'Design concept 3 for Wyltek Industries'
      },
      {
        'id': 'wyltek_industries_04',
        'name': 'Wyltek Industries 4',
        'file': 'assets/wyltek_industries_04.png',
        'description': 'Design concept 4 for Wyltek Industries'
      },
      {
        'id': 'wyltek_industries_05',
        'name': 'Wyltek Industries 5',
        'file': 'assets/wyltek_industries_05.png',
        'description': 'Design concept 5 for Wyltek Industries'
      },
      {
        'id': 'wyltek_industries_06',
        'name': 'Wyltek Industries 6',
        'file': 'assets/wyltek_industries_06.png',
        'description': 'Design concept 6 for Wyltek Industries'
      }
    ]
  }
],

  // Initial seeded updates shown on the home page
  updates: [
    {
      date: '2026-05-30',
      title: 'CKB Directory Website Launch',
      body: 'The companion website is now live at ckb.directory. Submit your app listings and vote on upcoming panel designs.'
    },
    {
      date: '2026-05-28',
      title: 'Android Build in Progress',
      body: 'The Nervos Companion app is entering final testing. Expect a Google Play release soon followed by iOS.'
    },
    {
      date: '2026-05-20',
      title: 'Ecosystem Directory Expanded',
      body: 'New apps added to the directory including iCKB, Quantum Purse, and Pocket Node. More coming via community submissions.'
    }
  ],

  // Storage keys
  STORE: {
    userId: 'ckb_dir_user_id',
    vote: 'ckb_dir_vote_v2',
    votes: 'ckb_dir_votes_v2',
    submissions: 'ckb_dir_submissions'
  }
};

/* ============================================================
   STATE
   ============================================================ */

const state = {
  currentPage: 'home',
  userId: null,
  userVotes: {},   // { groupId: panelId }
  votes: {},       // { panelId: count }
  votedGroups: {}  // { groupId: boolean }
};

/* ============================================================
   UTILITIES
   ============================================================ */

function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function getUserId() {
  let id = localStorage.getItem(CONFIG.STORE.userId);
  if (!id) {
    id = generateId();
    localStorage.setItem(CONFIG.STORE.userId, id);
  }
  return id;
}

function loadJson(key, fallback = {}) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or disabled
  }
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function getAllPanelIds() {
  return CONFIG.panelGroups.flatMap(g => g.panels.map(p => p.id));
}

function findGroupForPanel(panelId) {
  return CONFIG.panelGroups.find(g => g.panels.some(p => p.id === panelId));
}

/* ============================================================
   INITIALIZATION
   ============================================================ */

async function init() {
  state.userId = getUserId();

  // Migrate old string-format vote to new object format
  const rawVote = localStorage.getItem(CONFIG.STORE.vote);
  if (rawVote) {
    try {
      const parsed = JSON.parse(rawVote);
      if (parsed && typeof parsed === 'object') {
        state.userVotes = parsed;
      }
    } catch {
      // Old string format — reset
      state.userVotes = {};
    }
  }

  state.votes = loadJson(CONFIG.STORE.votes, {});

  // Seed votes for all panels if empty
  const allIds = getAllPanelIds();
  if (Object.keys(state.votes).length === 0) {
    allIds.forEach(id => { state.votes[id] = 0; });
    saveJson(CONFIG.STORE.votes, state.votes);
  }

  // Build votedGroups map
  state.votedGroups = {};
  Object.entries(state.userVotes).forEach(([groupId, panelId]) => {
    if (panelId) state.votedGroups[groupId] = true;
  });

  // Try to load shared vote counts from backend
  await loadRemoteVotes();

  bindNavigation();
  bindMobileMenu();
  bindSubmitForm();
  renderUpdates();
  handleRoute();

  window.addEventListener('hashchange', handleRoute);
}

/* ============================================================
   ROUTING
   ============================================================ */

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || '/';
  const path = hash.replace(/^\//, '').split('/')[0] || 'home';

  document.querySelectorAll('.page').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

  const pageMap = {
    '': 'home',
    'home': 'home',
    'submit': 'submit',
    'vote': 'vote'
  };

  const pageId = pageMap[path] || 'home';
  const pageEl = document.getElementById('page-' + pageId);
  if (pageEl) {
    pageEl.classList.remove('hidden');
    pageEl.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  const navLink = document.querySelector('.nav-link[data-page="' + pageId + '"]');
  if (navLink) navLink.classList.add('active');

  state.currentPage = pageId;

  // Page-specific init
  if (pageId === 'vote') {
    renderVotePage();
  }

  if (pageId === 'submit') {
    resetSubmitForm();
  }

  // Close mobile menu on route change
  const menu = document.getElementById('navMenu');
  const toggle = document.getElementById('navToggle');
  if (menu && menu.classList.contains('open')) {
    menu.classList.remove('open');
    toggle.classList.remove('open');
  }
}

function bindNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });
}

function bindMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('open')) {
      toggle.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

/* ============================================================
   HOME PAGE
   ============================================================ */

function renderUpdates() {
  const list = document.getElementById('updatesList');
  if (!list) return;

  list.innerHTML = CONFIG.updates.map(u => `
    <article class="update-card">
      <div class="update-date">${formatDate(u.date)}</div>
      <h3 class="update-title">${escapeHtml(u.title)}</h3>
      <p class="update-body">${escapeHtml(u.body)}</p>
    </article>
  `).join('');
}

/* ============================================================
   SUBMIT PAGE
   ============================================================ */

function bindSubmitForm() {
  const form = document.getElementById('submitForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    data.submitted_at = new Date().toISOString();
    data.user_id = state.userId;

    // Try backend first
    let backendOk = false;
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      backendOk = res.ok;
    } catch {
      // Backend unavailable
    }

    // Always store locally as fallback / backup
    const submissions = loadJson(CONFIG.STORE.submissions, []);
    submissions.push(data);
    saveJson(CONFIG.STORE.submissions, submissions);

    // Also attempt to open a mailto as a lightweight "send" action
    const subject = encodeURIComponent('CKB Directory Submission: ' + data.app_name);
    const body = encodeURIComponent(
      'Submission Type: ' + data.submission_type + '\n' +
      'App Name: ' + data.app_name + '\n' +
      'Description: ' + data.description + '\n' +
      'Website: ' + data.website + '\n' +
      'Contact: ' + data.contact_email + '\n' +
      'Twitter: ' + (data.twitter || 'N/A') + '\n' +
      'GitHub: ' + (data.github || 'N/A') + '\n' +
      'Discord: ' + (data.discord || 'N/A') + '\n' +
      'Banner Colors: ' + (data.banner_colors || 'N/A') + '\n' +
      'Notes: ' + (data.notes || 'N/A') + '\n'
    );

    try {
      window.open('mailto:submissions@ckb.directory?subject=' + subject + '&body=' + body, '_blank');
    } catch {
      // ignore
    }

    // Show success
    form.classList.add('hidden');
    document.getElementById('submitSuccess').classList.remove('hidden');
  });
}

function resetSubmitForm() {
  const form = document.getElementById('submitForm');
  const success = document.getElementById('submitSuccess');
  if (form && success) {
    form.reset();
    form.classList.remove('hidden');
    success.classList.add('hidden');
  }
}

/* ============================================================
   VOTE PAGE
   ============================================================ */

function renderVotePage() {
  const grid = document.getElementById('votingGrid');
  if (!grid) return;

  const totalVotes = Object.values(state.votes).reduce((a, b) => a + b, 0);
  const votedGroupCount = Object.keys(state.votedGroups).length;
  const totalGroups = CONFIG.panelGroups.length;

  // Global stats
  updateGlobalStats(totalVotes, votedGroupCount, totalGroups);

  // Render each group
  grid.innerHTML = CONFIG.panelGroups.map(group => {
    const groupVotes = group.panels.map(p => state.votes[p.id] || 0);
    const groupTotal = groupVotes.reduce((a, b) => a + b, 0);
    const groupMax = Math.max(...groupVotes, 0);
    const groupLeadingIds = group.panels
      .filter((_, i) => groupVotes[i] === groupMax && groupVotes[i] > 0)
      .map(p => p.id);
    const hasVotedInGroup = !!state.votedGroups[group.id];
    const userVoteInGroup = state.userVotes[group.id];

    const groupHtml = group.panels.map(panel => {
      const count = state.votes[panel.id] || 0;
      const percent = groupTotal > 0 ? Math.round((count / groupTotal) * 100) : 0;
      const isLeading = groupLeadingIds.includes(panel.id);
      const isVoted = userVoteInGroup === panel.id;

      return `
        <div class="panel-card ${isLeading ? 'leading' : ''}" data-panel="${panel.id}">
          <div class="panel-image-wrap">
            <img src="${panel.file}" alt="${escapeHtml(panel.name)}" class="panel-image" loading="lazy">
            ${isLeading ? '<span class="panel-badge">Leading</span>' : ''}
          </div>
          <div class="panel-info">
            <h3 class="panel-name">${escapeHtml(panel.name)}</h3>
            <p class="panel-meta">${escapeHtml(panel.description)}</p>
            <div class="panel-vote-bar">
              <div class="vote-progress">
                <div class="vote-progress-fill" style="width: ${percent}%"></div>
              </div>
              <div class="vote-count">
                <span class="count">${count} vote${count !== 1 ? 's' : ''}</span>
                <span class="percent">${percent}%</span>
              </div>
            </div>
            <div class="panel-actions">
              <button class="btn-vote ${isVoted ? 'voted' : ''}"
                      data-panel="${panel.id}"
                      data-group="${group.id}">
                ${isVoted
                  ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> You Voted'
                  : hasVotedInGroup
                    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> Change Vote'
                    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> Vote'
                }
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const leadingNames = groupLeadingIds.map(id => {
      const p = group.panels.find(x => x.id === id);
      return p ? p.name : id;
    });
    const leadingText = groupTotal === 0 ? '—' : (leadingNames.length === 1 ? leadingNames[0] : 'Tie');

    return `
      <div class="group-section" data-group="${group.id}">
        <div class="group-header">
          <h2 class="group-name">${escapeHtml(group.name)}</h2>
          <div class="group-stats">
            <span>${groupTotal} vote${groupTotal !== 1 ? 's' : ''}</span>
            <span class="group-stats-sep">·</span>
            <span>Leading: ${escapeHtml(leadingText)}</span>
            ${hasVotedInGroup ? '<span class="group-voted-badge">Voted</span>' : ''}
          </div>
        </div>
        <div class="voting-grid">
          ${groupHtml}
        </div>
      </div>
    `;
  }).join('');

  // Bind vote buttons
  grid.querySelectorAll('.btn-vote').forEach(btn => {
    btn.addEventListener('click', () => {
      const panelId = btn.dataset.panel;
      const groupId = btn.dataset.group;
      if (panelId && groupId) castVote(panelId, groupId);
    });
  });
}

function updateGlobalStats(totalVotes, votedGroupCount, totalGroups) {
  const totalEl = document.getElementById('statTotalVotes');
  const votersEl = document.getElementById('statVoters');
  const leadingEl = document.getElementById('statLeading');

  if (totalEl) totalEl.textContent = totalVotes.toLocaleString();
  if (votersEl) votersEl.textContent = votedGroupCount + ' / ' + totalGroups;

  if (leadingEl) {
    // Find global leading panel across all groups
    const entries = Object.entries(state.votes);
    if (entries.length === 0 || totalVotes === 0) {
      leadingEl.textContent = '—';
    } else {
      const max = Math.max(...entries.map(([, v]) => v));
      const leaders = entries.filter(([, v]) => v === max).map(([id]) => {
        for (const g of CONFIG.panelGroups) {
          const p = g.panels.find(x => x.id === id);
          if (p) return p.name;
        }
        return id;
      });
      leadingEl.textContent = leaders.length === 1 ? leaders[0] : 'Tie';
    }
  }
}

function castVote(panelId, groupId) {
  const oldPanelId = state.userVotes[groupId];

  if (oldPanelId === panelId) {
    // Same panel clicked — no-op
    return;
  }

  // Subtract old vote if changing
  if (oldPanelId) {
    state.votes[oldPanelId] = Math.max(0, (state.votes[oldPanelId] || 0) - 1);
  }

  // Record new vote locally
  state.votes[panelId] = (state.votes[panelId] || 0) + 1;
  state.userVotes[groupId] = panelId;
  state.votedGroups[groupId] = true;

  saveJson(CONFIG.STORE.votes, state.votes);
  saveJson(CONFIG.STORE.vote, state.userVotes);

  // Re-render
  renderVotePage();

  // Sync to backend
  syncVoteToBackend(panelId, state.userId);
}

async function loadRemoteVotes() {
  try {
    const ids = getAllPanelIds().join(',');
    const res = await fetch('/api/votes?panels=' + ids, { method: 'GET' });
    if (!res.ok) return;
    const data = await res.json();
    if (data.votes) {
      Object.entries(data.votes).forEach(([id, count]) => {
        const local = state.votes[id] || 0;
        state.votes[id] = Math.max(local, count);
      });
      saveJson(CONFIG.STORE.votes, state.votes);
    }
  } catch {
    // Backend not available — localStorage fallback works fine
  }
}

async function syncVoteToBackend(panelId, voterId) {
  try {
    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ panelId, voterId })
    });
    if (res.ok) {
      await loadRemoteVotes();
      renderVotePage();
    }
  } catch {
    // Backend unavailable — vote is still recorded locally
  }
}

/* ============================================================
   HELPERS
   ============================================================ */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================================
   BOOT
   ============================================================ */

document.addEventListener('DOMContentLoaded', init);
