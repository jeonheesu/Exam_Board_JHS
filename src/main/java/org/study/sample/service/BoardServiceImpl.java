package org.study.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.study.sample.mapper.BoardMapper;
import org.study.sample.model.BoardDTO;

@Service
public class BoardServiceImpl implements BoardService{

	@Autowired
	private BoardMapper mapper;

	@Override
	public void boardInsert(BoardDTO dto) {
		    mapper.boardInsert(dto);
		
	}
	@Override
	public List<BoardDTO> boardlist() {
		return mapper.boardlist();
	}

	@Override
	public BoardDTO boardRead(String m_no) {
		return mapper.boardRead(m_no);
	}

	@Override
	public void boardUpdate(BoardDTO dto) {
		mapper.boardUpdate(dto);
	}

	@Override
	public void boardDelete(String b_no) {
		mapper.boardDelete(b_no);
	}
	
	

	

}
